import { Value, formatValue } from '@cicada-lang/inet'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { clearSelectedValue } from '../selected-value/clearSelectedValue'
import { createSelectedValue } from '../selected-value/createSelectedValue'
import themeFontMono from '../theme/themeFontMono'

export function renderStackEntry(state: State, i: number, value: Value): void {
  const text = formatValue(value)
  const paddingX = 10
  const height = 34
  const x = 0
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.md
    ? themeFontMono('base')
    : themeFontMono('sm')

  renderButton(state, text, x, y, {
    name: `state[${i}]`,
    height,
    paddingX,
    isDisabled: (state) => i === state.selectedStackIndex,
    isActive: (state) => i === state.selectedStackIndex,
    activeUnderline: { offset: 5, width: 1.5 },
    withBorder: true,
    handler: (state) => {
      clearSelectedValue(state)
      state.selectedValue = createSelectedValue(state, value)
      state.selectedStackIndex = i
    },
  })
}
