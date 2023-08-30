import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { renderTypeDefinition } from './renderTypeDefinition'
import { renderTypeList } from './renderTypeList'
import { selectFirstType } from './selectFirstType'

export function renderTypes(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.selectedType === undefined) {
    selectFirstType(state)
  }

  if (state.selectedType) {
    renderTypeDefinition(state, state.selectedType.definition)
  }

  if (!state.isHidingUI) {
    renderTypeList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderButtonBack(state)
  }
}
