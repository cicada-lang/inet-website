import { State } from '../State'
import { renderButtonNodes } from './renderButtonNodes'
import { renderButtonTypes } from './renderButtonTypes'
import { renderButtonWords } from './renderButtonWords'

export function renderNavbar(state: State): void {
  renderButtonTypes(state)
  renderButtonNodes(state)
  renderButtonWords(state)
}
