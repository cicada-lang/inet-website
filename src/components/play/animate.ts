import { State } from './State.ts'
import { renderCurrent } from './renderCurrent.ts'
import { renderStack } from './renderStack.ts'

export function animate(state: State): void {
  state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  renderStack(state)
  if (state.current) {
    renderCurrent(state, state.current)
  }

  requestAnimationFrame(() => animate(state))
}
