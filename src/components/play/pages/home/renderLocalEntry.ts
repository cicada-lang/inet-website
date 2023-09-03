import { Value } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { createSelectedValue } from './createSelectedValue'

export function renderLocalEntry(
  state: State,
  i: number,
  name: string,
  value: Value,
): void {
  const height = themeSize(10)
  const marginT = height * 2

  const x = 0
  const y = 0 + height * i + marginT

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, '$' + name, x, y, {
    name: `locals.${name}`,
    height,
    isDisabled: (state) => name === state.homeState.selectedValue?.localName,
    isActive: (state) => name === state.homeState.selectedValue?.localName,
    handler: (state) => {
      state.homeState.selectedValue = createSelectedValue(state, value)
      state.homeState.selectedValue.localName = name
      state.homeState.selectedValue.stackInViewIndex = undefined
    },
  })
}
