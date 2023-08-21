import { State } from './State.ts'

export function animate(state: State): void {
  state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  state.ctx.font = '30px sans-serif'
  state.ctx.fillText('Hello world', 20, 120)

  requestAnimationFrame(() => animate(state))
}
