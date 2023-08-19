import { State } from './State.ts'
// import { createCamera } from "./camera/createCamera.ts"

export function createState(canvas: HTMLCanvasElement): State {
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
  }
}
