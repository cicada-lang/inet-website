import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderDefinitionsLabel } from './renderDefinitionsLabel'
import { renderNodeButton } from './renderNodeButton'
import { renderTypeButton } from './renderTypeButton'
import { renderWordButton } from './renderWordButton'

export function renderNavbar(state: State): void {
  const height = themeSize(10)
  const marginT = height * 2

  renderDefinitionsLabel(state)

  renderTypeButton(state, { height, marginT })
  renderNodeButton(state, { height, marginT })
  renderWordButton(state, { height, marginT })
}
