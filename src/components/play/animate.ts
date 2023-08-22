import { State } from './State'
import { evolveNet } from './evolveNet'
import { renderCurrent } from './renderCurrent'
import { renderStack } from './renderStack'

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
