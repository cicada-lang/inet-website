import { State } from '../State'
import { themeSize } from '../theme/themeSize'
import { renderButtonNode } from './renderButtonNode'
import { renderButtonType } from './renderButtonType'
import { renderButtonWord } from './renderButtonWord'
import { renderLabelDefinitions } from './renderLabelDefinitions'

export function renderNavbar(state: State): void {
  const height = themeSize(10)
  const marginT = height * 2

  renderLabelDefinitions(state)

  renderButtonType(state, { height, marginT })
  renderButtonNode(state, { height, marginT })
  renderButtonWord(state, { height, marginT })
}
