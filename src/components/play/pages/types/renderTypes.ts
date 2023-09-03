import { State } from '../../State'
import { renderBackButton } from '../../components/navbar/renderBackButton'
import { renderNavbar } from '../../components/navbar/renderNavbar'
import { renderSelectedType } from './renderSelectedType'
import { renderTypeList } from './renderTypeList'
import { selectFirstType } from './selectFirstType'

export function renderTypes(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.selectedType === undefined) {
    selectFirstType(state)
  }

  if (state.selectedType) {
    renderSelectedType(state, state.selectedType)
  }

  if (!state.isHidingUI) {
    renderTypeList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderBackButton(state)
  }
}
