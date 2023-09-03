import { Value, formatValue } from '@cicada-lang/inet'
import { State } from '../../State'
import { createButton } from '../../components/button/createButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { createSelectedValue } from './createSelectedValue'

export function renderStackEntry(
  state: State,
  i: number,
  value: Value,
  options: {
    height: number
  },
): void {
  const { height } = options

  const text = formatValue(value)
  const x = 0
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  createButton(state, text, x, y, {
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
