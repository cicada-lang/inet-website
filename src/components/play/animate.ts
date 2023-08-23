import { State } from './State'
import { renderCurrent } from './current/renderCurrent'
import { evolveNet } from './net/evolveNet'
import { renderStack } from './stack/renderStack'

export function animate(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  renderStack(state)
  if (state.current) {
    renderCurrent(state, state.current)
    if (state.current['@kind'] === 'CurrentPort') {
      evolveNet(state, state.current)
    }
  }

  requestAnimationFrame(() => animate(state))
}
