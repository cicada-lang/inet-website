import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { RenderOptions } from '../../route/Route'
import { findCurrentNodeDefinition } from './findCurrentNodeDefinition'
import { renderNodeList } from './renderNodeList'
import { setupCurrentNodeDefinition } from './setupCurrentNodeDefinition'

export function renderNodes(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  setupCurrentNodeDefinition(state)

  const definition = findCurrentNodeDefinition(state)
  if (definition) {
    // renderNodeDefinition(state)
  }

  if (!state.isHidingUI) {
    renderNodeList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderButtonBack(state)
  }
}
