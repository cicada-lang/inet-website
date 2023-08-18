import { Fetcher, Loader, createMod, parseStmts } from "@cicada-lang/inet"
import { State } from "./State"

export type StateOptions = {
  text: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { text } = options

  const fetcher = new Fetcher()
  const loader = new Loader({ fetcher })

  const url = new URL(window.location.href)

  const stmts = parseStmts(text)
  const mod = createMod({ loader, url, text, stmts })

  for (const stmt of stmts) {
    await stmt.execute(mod)
  }

  return {
    text,
    mod,
  }
}
