import { State } from '../../State'
import { createButton } from '../../components/button/createButton'
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
      createButton(state, name, 0, marginT + height * i, {
        name: `types/${name}`,
        height,
        isActive: (state) => state.selectedType?.name === name,
        isDisabled: (state) => state.selectedType?.name === name,
        handler: (state) => selectType(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}
