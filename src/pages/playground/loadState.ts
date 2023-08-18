import { Fetcher } from "@cicada-lang/inet/lib/fetcher"
import { createMod } from "@cicada-lang/inet/lib/lang/mod/createMod"
import { parseStmts } from "@cicada-lang/inet/lib/lang/syntax"
import { Loader } from "@cicada-lang/inet/lib/loader"
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

  return {
    text,
    mod,
  }
}
