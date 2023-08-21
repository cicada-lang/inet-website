import { Mod } from '@cicada-lang/inet'
import { Mouse } from './mouse/Mouse'

export type State = {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  mouse: Mouse
  mod: Mod
}
