import { State } from '../../State'
import { renderNavbar } from '../../nav/renderNavbar'
import { evolveNet } from '../../net/evolveNet'
import { RenderOptions } from '../../route/Route'
import { renderLocalVariables } from './renderLocalVariables'
import { renderSelectedValue } from './renderSelectedValue'
import { renderStack } from './renderStack'

export function renderHome(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.selectedValue) {
    renderSelectedValue(state, state.selectedValue)

    if (state.selectedValue['@kind'] === 'SelectedValuePort') {
      evolveNet(
        state,
        state.selectedValue.net,
        state.selectedValue.layout,
        state.selectedValue.evolvingStep++,
      )
    }
  }

  if (!state.isHidingUI) {
    renderStack(state)
    renderLocalVariables(state)
    renderNavbar(state)
  }
}
