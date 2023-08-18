import { Mod } from "@cicada-lang/inet/lib/lang/mod"

export type State = {
  text: string
  mod: Mod
  error?: {
    kind: string
    message: string
  }
}
