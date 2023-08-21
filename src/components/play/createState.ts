import { Mod } from '@cicada-lang/inet'
import { State } from './State.ts'
import { createMouse } from './mouse/createMouse.ts'

export type StateOptions = {
  canvas: HTMLCanvasElement
  mod: Mod
}

export function createState(options: StateOptions): State {
  const { mod, canvas } = options

  const mouse = createMouse(canvas)

  return {
    canvas,
    mouse,
    mod,
  }
}
