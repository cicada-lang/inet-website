import { FunctionDefinition } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { selectFunction } from './selectFunction'

export function renderFunctionListEntry(
  state: State,
  i: number,
  definition: FunctionDefinition,
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
    name: `functions/${definition.name}`,
    text: definition.name,
    x: marginL,
    y: marginT + height * i,
    height,
    isActive: (state) =>
      state.functionState.selectedFunction?.name === definition.name,
    isDisabled: (state) =>
      state.functionState.selectedFunction?.name === definition.name,
    onClick: (state) => selectFunction(state, definition.name),
  })

  state.ctx.restore()
}
