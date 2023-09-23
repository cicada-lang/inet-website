import { Value } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { createSelectedValue } from '../../components/env/createSelectedValue'
import { themeFontSize } from '../../theme/themeFontSize'
import { EnvRendering } from './EnvRendering'

export function renderLocalEntry(
  state: State,
  rendering: EnvRendering,
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
    name: `${rendering.name}/locals.${name}`,
    text: '$' + name,
    x,
    y,
    height,
    isDisabled: (state) => name === rendering.localName,
    isActive: (state) => name === rendering.localName,
    onClick: (state) => {
      rendering.selectedValue = createSelectedValue(rendering, value)
      rendering.localName = name
      rendering.stackInViewIndex = undefined
    },
  })
}
