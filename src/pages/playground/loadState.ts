// import { createMod } from "@cicada-lang/inet/lib/lang/mod/createMod"
import { State } from "./State"

export type StateOptions = {
  text: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { text } = options
  // const mod = createMod()
  return {
    text,
    //    mod,
  }
}
