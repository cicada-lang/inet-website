import { State } from '../State'
import { renderButtonBack } from './renderButtonBack'
import { renderButtonNodes } from './renderButtonNodes'
import { renderButtonTypes } from './renderButtonTypes'
import { renderButtonWords } from './renderButtonWords'

export function renderNavCircle(state: State): void {
  if (state.historyPaths.length > 0) {
    renderButtonBack(state)
  }

  renderButtonTypes(state)
  renderButtonNodes(state)
  renderButtonWords(state)
}
