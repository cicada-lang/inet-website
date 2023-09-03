import { Value } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { createSelectedValue } from './createSelectedValue'

export function renderLocalEntry(
  state: State,
  i: number,
  name: string,
  value: Value,
  options: {
    height: number
    marginL: number
  },
): void {
  const { height, marginL } = options

  const marginT = height * 2

  const x = marginL
  const y = 0 + height * i + marginT

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, '$' + name, x, y, {
    name: `locals.${name}`,
    height,
    isDisabled: (state) => name === state.homeState.localName,
    isActive: (state) => name === state.homeState.localName,
    handler: (state) => {
      state.homeState.selectedValue = createSelectedValue(state, value)
      state.homeState.localName = name
      state.homeState.stackInViewIndex = undefined
    },
  })
}
