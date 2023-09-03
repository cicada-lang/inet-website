import { State } from '../../State'
import { renderNavbar } from '../../components/navbar/renderNavbar'
import { evolveNet } from '../../components/net/evolveNet'
import { RenderOptions } from '../../route/Route'
import { renderLocals } from './renderLocals'
import { renderSelectedValue } from './renderSelectedValue'
import { renderStack } from './renderStack'

export function renderHomePage(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.homeState.selectedValue) {
    renderSelectedValue(state, state.homeState.selectedValue)

    if (state.homeState.selectedValue['@kind'] === 'SelectedValuePort') {
      evolveNet(state, state.homeState.selectedValue.rendering)
    }
  }

  if (!state.isHidingUI) {
    renderStack(state)
    renderLocals(state)
    renderNavbar(state)
  }
}
