import { TypeDefinition } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { selectType } from './selectType'

export function renderTypeListEntry(
  state: State,
  i: number,
  definition: TypeDefinition,
  options: {
    height: number
    marginT: number
  },
): void {
  const { height, marginT } = options

  state.ctx.save()

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `types/${definition.name}`,
    text: definition.name,
    x: 0,
    y: marginT + height * i,
    height,
    isActive: (state) => state.typeState.selectedType?.name === definition.name,
    isDisabled: (state) =>
      state.typeState.selectedType?.name === definition.name,
    handler: (state) => selectType(state, definition.name),
  })

  state.ctx.restore()
}
