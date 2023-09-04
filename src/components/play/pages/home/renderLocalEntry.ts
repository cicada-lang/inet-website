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
    marginT: number
  },
): void {
  const { height, marginL, marginT } = options

  const x = marginL
  const y = 0 + height * i + marginT

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `locals.${name}`,
    text: '$' + name,
    x,
    y,
    height,
    isDisabled: (state) => name === state.homeState.envRendering.localName,
    isActive: (state) => name === state.homeState.envRendering.localName,
    handler: (state) => {
      state.homeState.envRendering.selectedValue = createSelectedValue(
        state,
        value,
      )
      state.homeState.envRendering.localName = name
      state.homeState.envRendering.stackInViewIndex = undefined
    },
  })
}
