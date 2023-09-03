import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderTypesLabel } from './renderTypesLabel'
import { selectType } from './selectType'

export function renderTypeList(state: State): void {
  renderTypesLabel(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      renderButton(state, name, 0, marginT + height * i, {
        name: `types/${name}`,
        height,
        isActive: (state) => state.typeState.selectedType?.name === name,
        isDisabled: (state) => state.typeState.selectedType?.name === name,
        handler: (state) => selectType(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}