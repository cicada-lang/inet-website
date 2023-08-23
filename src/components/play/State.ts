import { Mod } from '@cicada-lang/inet'
import { Button } from './button/Button'
import { Selected } from './selected/Selected'
import { Mouse } from './mouse/Mouse'

export type State = {
  // Contexts:
  container: HTMLElement
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  mod: Mod
  width: number
  height: number

  // Abstract devices:
  mouse: Mouse

  // Entity stores:
  buttons: Map<string, Button>

  // Interactions:
  selected?: Selected
}
