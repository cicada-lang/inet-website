import { Mod } from '@cicada-lang/inet'
import { State } from './State.ts'
// import { createCamera } from "./camera/createCamera.ts"

export type StateOptions = {
  canvas: HTMLCanvasElement
  mod: Mod
}

export function createState(options: StateOptions): State {
  const { mod, canvas } = options

  // const camera = createCamera()

  const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    isDown: false,
  }

  return {
    canvas,
    // camera,
    mouse,
    mod,
  }
}
