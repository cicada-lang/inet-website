import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { findCurrentNodeDefinition } from './findCurrentNodeDefinition'
import { renderNodeDefinition } from './renderNodeDefinition'
import { renderNodeList } from './renderNodeList'
import { setupCurrentNodeDefinition } from './setupCurrentNodeDefinition'

export function renderNodes(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  setupCurrentNodeDefinition(state)

  const definition = findCurrentNodeDefinition(state)
  if (definition) {
    renderNodeDefinition(state, definition)
  }

  if (!state.isHidingUI) {
    renderNodeList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderButtonBack(state)
  }
}
