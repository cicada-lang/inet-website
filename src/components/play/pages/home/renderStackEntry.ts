import { Value, formatValue } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { createSelectedValue } from './createSelectedValue'

export function renderStackEntry(
  state: State,
  i: number,
  value: Value,
  options: {
    height: number
    paddingX: number
  },
): void {
  const { height, paddingX } = options

  const text = formatValue(value)
  const x = 0
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, text, x, y, {
    name: `state[${i}]`,
    height,
    paddingX,
    isDisabled: (state) => i === state.selectedValue?.stackIndex,
    isActive: (state) => i === state.selectedValue?.stackIndex,
    handler: (state) => {
      state.selectedValue = createSelectedValue(state, value)
      state.selectedValue.stackIndex = i
    },
  })
}
