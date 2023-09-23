import { Mod } from '@cicada-lang/inet-js'

export type State = {
  kind: 'Play' | 'Output' | 'Error'
  text: string
  mod: Mod
  output: string
  errorMessage: string
  tick: number
}
