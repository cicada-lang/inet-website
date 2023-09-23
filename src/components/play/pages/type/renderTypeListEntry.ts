import { TypeDefinition } from '@cicada-lang/inet-js'
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
    marginL: number
  },
): void {
  const { height, marginT, marginL } = options

  state.ctx.save()

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `types/${definition.name}`,
    text: definition.name,
    x: marginL,
    y: marginT + height * i,
    height,
    isActive: (state) => state.typeState.selectedType?.name === definition.name,
    isDisabled: (state) =>
      state.typeState.selectedType?.name === definition.name,
    onClick: (state) => selectType(state, definition.name),
  })

  state.ctx.restore()
}
