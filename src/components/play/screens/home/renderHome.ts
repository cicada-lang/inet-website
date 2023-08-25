import { State } from '../../State'
import { renderLocalVariables } from '../../local-variable/renderLocalVariables'
import { renderNavbar } from '../../nav/renderNavbar'
import { evolveNet } from '../../net/evolveNet'
import { RenderOptions } from '../../route/Route'
import { renderSelectedValue } from '../../selected-value/renderSelectedValue'
import { renderStack } from '../../stack/renderStack'

export function renderHome(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.selectedValue) {
    renderSelectedValue(state, state.selectedValue)

    if (state.selectedValue['@kind'] === 'SelectedValuePort') {
      evolveNet(state, state.selectedValue)
    }
  }

  renderStack(state)
  renderLocalVariables(state)
  renderNavbar(state)
}
