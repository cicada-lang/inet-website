import { State } from '../State'
import { themeSize } from '../theme/themeSize'
import { renderButtonNode } from './renderButtonNode'
import { renderButtonType } from './renderButtonType'
import { renderButtonWord } from './renderButtonWord'

export function renderNavbar(state: State): void {
  const height = themeSize(10)
  const marginT = height + 15
  const paddingX = themeSize(3)

  renderButtonType(state, { height, marginT, paddingX })
  renderButtonNode(state, { height, marginT, paddingX })
  renderButtonWord(state, { height, marginT, paddingX })
}
