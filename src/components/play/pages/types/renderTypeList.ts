import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { fontSize } from '../../theme/fontSize'
import { selectType } from './selectType'

export function renderTypeList(state: State): void {
  state.ctx.save()

  const height = 34
  const marginT = height + 15

  state.ctx.font = state.breakpoints.md
    ? `${fontSize('lg')} monospace`
    : `${fontSize('base')} monospace`

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      renderButton(state, name, 0, marginT + height * i, {
        name: `types/${name}`,
        height,
        paddingX: 10,
        isActive: (state) => state.selectedType?.name === name,
        isDisabled: (state) => state.selectedType?.name === name,
        activeUnderline: { offset: 8, width: 1.5 },
        handler: (state) => selectType(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}
