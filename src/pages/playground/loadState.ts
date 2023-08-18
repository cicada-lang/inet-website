import { State } from "./State"

export type StateOptions = {}

export async function loadState(_options: StateOptions): Promise<State> {
  return {
    text: "",
  }
}
