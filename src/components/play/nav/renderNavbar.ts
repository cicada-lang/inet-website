import { State } from '../State'
import { themeSize } from '../theme/themeSize'
import { renderButtonNode } from './renderButtonNode'
import { renderButtonType } from './renderButtonType'
import { renderButtonWord } from './renderButtonWord'
import { renderLabelDefinitions } from './renderLabelDefinitions'

export function renderNavbar(state: State): void {
  const height = themeSize(10)
  const marginT = height * 2 + themeSize(4)
  const paddingX = themeSize(3)

  renderLabelDefinitions(state)

  renderButtonType(state, { height, marginT, paddingX })
  renderButtonNode(state, { height, marginT, paddingX })
  renderButtonWord(state, { height, marginT, paddingX })
}
