import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderLabelTypes } from './renderLabelTypes'
import { selectType } from './selectType'

export function renderTypeList(state: State): void {
  renderLabelTypes(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2 + themeSize(4)

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      renderButton(state, name, 0, marginT + height * i, {
        name: `types/${name}`,
        height,
        paddingX: themeSize(3),
        isActive: (state) => state.selectedType?.name === name,
        isDisabled: (state) => state.selectedType?.name === name,
        handler: (state) => selectType(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}
