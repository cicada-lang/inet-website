import { Value, formatValue } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import themeFontMono from '../../theme/themeFontMono'
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
    ? themeFontMono('base')
    : themeFontMono('sm')

  renderButton(state, text, x, y, {
    name: `state[${i}]`,
    height,
    paddingX,
    isDisabled: (state) => i === state.selectedValue?.stackIndex,
    isActive: (state) => i === state.selectedValue?.stackIndex,
    activeUnderline: { offset: 5, width: 1.5 },
    withBorder: true,
    handler: (state) => {
      state.selectedValue = createSelectedValue(state, value)
      state.selectedValue.stackIndex = i
    },
  })
}
