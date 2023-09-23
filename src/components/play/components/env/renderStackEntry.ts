import {
  Value,
  formatHalfEdgeOtherPort,
  formatValue,
} from '@cicada-lang/inet-js'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { createSelectedValue } from '../../components/env/createSelectedValue'
import { themeFontSize } from '../../theme/themeFontSize'
import { EnvRendering } from './EnvRendering'

export function renderStackEntry(
  state: State,
  rendering: EnvRendering,
  i: number,
  value: Value,
  options: {
    height: number
    marginL: number
  },
): void {
  const { height, marginL } = options

  const text =
    value['@kind'] === 'HalfEdge'
      ? formatHalfEdgeOtherPort(rendering.env.net, value)
      : formatValue(rendering.env, value)
  const x = marginL
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `${rendering.name}/stack[${i}]`,
    text,
    x,
    y,
    height,
    isDisabled: (state) => i === rendering.stackInViewIndex,
    isActive: (state) => i === rendering.stackInViewIndex,
    onClick: (state) => {
      rendering.selectedValue = createSelectedValue(rendering, value)
      rendering.stackInViewIndex = i
      rendering.localName = undefined
    },
  })
}
