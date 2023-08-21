import { Mod } from '@cicada-lang/inet'
import { Mouse } from './mouse/Mouse'

export type State = {
  canvas: HTMLCanvasElement
  mouse: Mouse
  mod: Mod
}
