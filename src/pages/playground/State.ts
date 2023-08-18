import { Mod } from "@cicada-lang/inet"

export type State = {
  text: string
  mod: Mod
  error?: {
    kind: string
    message: string
  }
}
