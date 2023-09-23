import { Value, formatValue } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'

export function renderValue(state: State, value: Value): void {
  state.ctx.save()

  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('3xl')} monospace`
    : `${themeFontSize('2xl')} monospace`

  const valueText = formatValue(state.mod.env, value)
  const valueTextMetrics = state.ctx.measureText(valueText)
  const x = state.width / 2 - valueTextMetrics.width / 2
  const y = state.height / 2
  state.ctx.fillText(valueText, x, y)

  state.ctx.restore()
}
