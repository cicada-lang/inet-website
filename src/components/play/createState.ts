import { Mod } from '@cicada-lang/inet'
import { State } from './State.ts'
import { createMouse } from './mouse/createMouse.ts'

export type StateOptions = {
  canvas: HTMLCanvasElement
  mod: Mod
}

export function createState(options: StateOptions): State {
  const { mod, canvas } = options

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const mouse = createMouse(canvas)

  return {
    canvas,
    ctx,
    mouse,
    mod,
  }
}
