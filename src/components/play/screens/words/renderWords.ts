import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { RenderOptions } from '../../route/Route'
import { findCurrentWordDefinition } from './findCurrentWordDefinition'
import { renderWordDefinition } from './renderWordDefinition'
import { renderWordList } from './renderWordList'
import { setupCurrentWordDefinition } from './setupCurrentWordDefinition'

export function renderWords(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  setupCurrentWordDefinition(state)

  const definition = findCurrentWordDefinition(state)
  if (definition) {
    renderWordDefinition(state, definition)
  }

  if (!state.isHidingUI) {
    renderWordList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderButtonBack(state)
  }
}
