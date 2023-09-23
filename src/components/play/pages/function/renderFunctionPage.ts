import { State } from '../../State'
import { renderSelectedValue } from '../../components/env/renderSelectedValue'
import { renderStack } from '../../components/env/renderStack'
import { renderBackButton } from '../../components/navbar/renderBackButton'
import { renderNavbar } from '../../components/navbar/renderNavbar'
import { evolveNet } from '../../components/net/evolveNet'
import { RenderOptions } from '../../route/Route'
import { renderFunctionList } from './renderFunctionList'
import { selectFirstFunction } from './selectFirstFunction'

export function renderFunctionPage(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.functionState.selectedFunction === undefined) {
    selectFirstFunction(state)
  }

  if (state.functionState.selectedFunction) {
    const { envRendering } = state.functionState.selectedFunction

    if (envRendering.selectedValue) {
      renderSelectedValue(state, envRendering.selectedValue)

      if (envRendering.selectedValue['@kind'] === 'SelectedValueHalfEdge') {
        evolveNet(state, envRendering.selectedValue.netRendering)
      }
    }

    if (!state.isHidingUI) {
      renderStack(state, envRendering)
    }
  }

  if (!state.isHidingUI) {
    renderFunctionList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderBackButton(state)
  }
}
