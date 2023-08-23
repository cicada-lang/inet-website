import { State } from './State'
import { renderSelected } from './selected/renderSelected'
import { evolveNet } from './net/evolveNet'
import { renderStack } from './stack/renderStack'

export function animate(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  renderStack(state)
  if (state.selected) {
    renderSelected(state, state.selected)
    if (state.selected['@kind'] === 'SelectedPort') {
      evolveNet(state, state.selected)
    }
  }

  requestAnimationFrame(() => animate(state))
}
