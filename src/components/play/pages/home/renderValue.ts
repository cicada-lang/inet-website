import { Value, formatValue } from '@cicada-lang/inet'
import { State } from '../../State'
import themeFontMono from '../../theme/themeFontMono'

export function renderValue(state: State, value: Value): void {
  state.ctx.save()

  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.font = state.breakpoints.md
    ? themeFontMono('3xl')
    : themeFontMono('2xl')

  const valueText = formatValue(value)
  const valueTextMetrics = state.ctx.measureText(valueText)
  const x = state.width / 2 - valueTextMetrics.width / 2
  const y = state.height / 2
  state.ctx.fillText(valueText, x, y)

  state.ctx.restore()
}
