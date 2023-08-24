import { State } from './State'
import { evolveNet } from './net/evolveNet'
import { renderSelected } from './selected/renderSelected'
import { renderStack } from './stack/renderStack'

export function render(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  renderStack(state)
  if (state.selected) {
    renderSelected(state, state.selected)
    if (state.selected['@kind'] === 'SelectedPort') {
      evolveNet(state, state.selected)
    }
  }

  requestAnimationFrame(() => render(state))
}
