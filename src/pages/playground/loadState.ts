import { Fetcher, Loader, createMod } from "@cicada-lang/inet"
import { State } from "./State"
import { stateReload } from "./stateReload"

export type StateOptions = {
  text: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { text } = options

  const fetcher = new Fetcher()
  const loader = new Loader({ fetcher })

  const url = new URL(window.location.href)

  const mod = createMod({ loader, url, text, stmts: [] })

  const state: State = { text, mod, output: "", errorMessage: "" }

  await stateReload(state)

  return state
}
