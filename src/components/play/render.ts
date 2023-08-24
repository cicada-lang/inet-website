import { State } from './State'
import { evolveNet } from './net/evolveNet'
import { renderSelectedValue } from './selected-value/renderSelectedValue'
import { renderStack } from './stack/renderStack'

export function render(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  renderStack(state)
  if (state.selectedValue) {
    renderSelectedValue(state, state.selectedValue)
    if (state.selectedValue['@kind'] === 'SelectedValuePort') {
      evolveNet(state, state.selectedValue)
    }
  }

  requestAnimationFrame(() => render(state))
}
