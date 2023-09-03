import { Value, formatValue } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { createSelectedValue } from './createSelectedValue'

export function renderStackEntry(
  state: State,
  i: number,
  value: Value,
  options: {
    height: number
    marginL?: number
  },
): void {
  const { height, marginL } = options

  const text = formatValue(value)
  const x = marginL || 0
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, text, x, y, {
    name: `state[${i}]`,
    height,
    isDisabled: (state) => i === state.selectedValue?.stackIndex,
    isActive: (state) => i === state.selectedValue?.stackIndex,
    handler: (state) => {
      state.selectedValue = createSelectedValue(state, value)
      state.selectedValue.stackIndex = i
    },
  })
}
