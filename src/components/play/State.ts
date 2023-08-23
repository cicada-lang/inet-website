import { Mod } from '@cicada-lang/inet'
import { Button } from './button/Button'
import { Current } from './current/Current'
import { Mouse } from './mouse/Mouse'

export type State = {
  container: HTMLElement
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  mouse: Mouse
  mod: Mod
  current?: Current
  buttons: Map<string, Button>
}
