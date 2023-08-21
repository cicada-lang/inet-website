import { State } from './State.ts'
import { renderCurrentValue } from './renderCurrentValue.ts'
import { renderStack } from './renderStack.ts'

export function animate(state: State): void {
  state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)

  renderStack(state)
  renderCurrentValue(state)

  requestAnimationFrame(() => animate(state))
}
