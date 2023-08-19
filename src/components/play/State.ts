import { Mod } from '@cicada-lang/inet'
import { Mouse } from './Mouse.ts'

export type State = {
  canvas: HTMLCanvasElement
  mouse: Mouse
  mod: Mod
}
