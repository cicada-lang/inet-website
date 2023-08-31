import { State } from '../State'
import { themeSize } from '../theme/themeSize'
import { renderButtonNodes } from './renderButtonNodes'
import { renderButtonTypes } from './renderButtonTypes'
import { renderButtonWords } from './renderButtonWords'

export function renderNavbar(state: State): void {
  const height = themeSize(10)
  const marginT = height + 15
  const paddingX = themeSize(3)

  renderButtonTypes(state, { height, marginT, paddingX })
  renderButtonNodes(state, { height, marginT, paddingX })
  renderButtonWords(state, { height, marginT, paddingX })
}
