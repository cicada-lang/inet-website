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
    marginL: number
  },
): void {
  const { height, marginL } = options

  const text = formatValue(value)
  const x = marginL
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `state[${i}]`,
    text,
    x,
    y,
    height,
    isDisabled: (state) => i === state.homeState.stackInViewIndex,
    isActive: (state) => i === state.homeState.stackInViewIndex,
    handler: (state) => {
      state.homeState.selectedValue = createSelectedValue(state, value)
      state.homeState.stackInViewIndex = i
      state.homeState.localName = undefined
    },
  })
}
