import { Mod } from '@cicada-lang/inet'

export type State = {
  kind: 'Output' | 'Play'
  text: string
  mod: Mod
  output: string
  errorMessage: string
  tick: number
}
