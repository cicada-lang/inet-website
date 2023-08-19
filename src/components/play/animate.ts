import { State } from './State.ts'

export function animate(ctx: CanvasRenderingContext2D, state: State): void {
  ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  ctx.font = '30px sans-serif'
  ctx.fillText('Hello world', 20, 120)

  requestAnimationFrame(() => animate(ctx, state))
}
