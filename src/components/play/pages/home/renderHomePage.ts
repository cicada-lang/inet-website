import { State } from '../../State'
import { renderLocals } from '../../components/env/renderLocals'
import { renderSelectedValue } from '../../components/env/renderSelectedValue'
import { renderStack } from '../../components/env/renderStack'
import { renderNavbar } from '../../components/navbar/renderNavbar'
import { evolveNet } from '../../components/net/evolveNet'
import { RenderOptions } from '../../route/Route'

export function renderHomePage(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.homeState.envRendering.selectedValue) {
    renderSelectedValue(state, state.homeState.envRendering.selectedValue)

    if (
      state.homeState.envRendering.selectedValue['@kind'] ===
      'SelectedValuePort'
    ) {
      evolveNet(state, state.homeState.envRendering.selectedValue.netRendering)
    }
  }

  if (!state.isHidingUI) {
    renderStack(state, state.homeState.envRendering)
    renderLocals(state, state.homeState.envRendering)
    renderNavbar(state)
  }
}
