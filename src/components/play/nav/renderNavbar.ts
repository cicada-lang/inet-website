import { State } from '../State'
import { renderButtonNodes } from './renderButtonNodes'
import { renderButtonTypes } from './renderButtonTypes'
import { renderButtonWords } from './renderButtonWords'

export function renderNavbar(state: State): void {
  const height = 34
  const marginT = height + 15
  const paddingX = 10

  renderButtonTypes(state, { height, marginT, paddingX })
  renderButtonNodes(state, { height, marginT, paddingX })
  renderButtonWords(state, { height, marginT, paddingX })
}
