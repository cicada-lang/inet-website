import { Mod } from '@cicada-lang/inet'

export type State = {
  kind: "Output" | "Stage"
  text: string
  mod: Mod
  output: string
  errorMessage: string
}
