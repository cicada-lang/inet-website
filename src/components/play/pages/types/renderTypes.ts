import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
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
    if (state.history.length > 0) renderButtonBack(state)
  }
}
