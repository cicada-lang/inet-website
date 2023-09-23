import { State } from '../../State'
import { renderLocals } from '../../components/env/renderLocals'
import { renderSelectedValue } from '../../components/env/renderSelectedValue'
import { renderStack } from '../../components/env/renderStack'
import { renderNavbar } from '../../components/navbar/renderNavbar'
import { evolveNet } from '../../components/net/evolveNet'
import { RenderOptions } from '../../route/Route'

export function renderHomePage(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  const { envRendering } = state.homeState

  if (envRendering.selectedValue) {
    renderSelectedValue(state, envRendering.selectedValue)

    if (envRendering.selectedValue['@kind'] === 'SelectedValueHalfEdge') {
      evolveNet(state, envRendering.selectedValue.netRendering)
    }
  }

  if (!state.isHidingUI) {
    renderStack(state, envRendering)
    renderLocals(state, envRendering)
    renderNavbar(state)
  }
}
