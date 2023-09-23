import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderDefinitionsLabel } from './renderDefinitionsLabel'
import { renderFunctionButton } from './renderFunctionButton'
import { renderNodeButton } from './renderNodeButton'
import { renderTypeButton } from './renderTypeButton'

export function renderNavbar(state: State): void {
  const height = themeSize(10)
  const marginT = height * 2

  renderDefinitionsLabel(state)

  renderTypeButton(state, { height, marginT })
  renderNodeButton(state, { height, marginT })
  renderFunctionButton(state, { height, marginT })
}
