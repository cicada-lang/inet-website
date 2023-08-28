import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { findCurrentTypeDefinition } from './findCurrentTypeDefinition'
import { renderTypeDefinition } from './renderTypeDefinition'
import { renderTypeDefinitionList } from './renderTypeDefinitionList'
import { setupCurrentTypeDefinition } from './setupCurrentTypeDefinition'

export function renderTypes(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  setupCurrentTypeDefinition(state)

  const typeDefinition = findCurrentTypeDefinition(state)
  if (typeDefinition) {
    renderTypeDefinition(state)
  }

  renderNavbar(state)
  if (state.history.length > 0) {
    renderButtonBack(state)
  }

  renderTypeDefinitionList(state)
}
