import { Value, formatValue } from '@cicada-lang/inet'
import { State } from '../../State'
import { fontSize } from '../../theme/fontSize'

export function renderValue(state: State, value: Value): void {
  state.ctx.save()

  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.font = state.breakpoints.md
    ? `${fontSize('3xl')} monospace`
    : `${fontSize('2xl')} monospace`

  const valueText = formatValue(value)
  const valueTextMetrics = state.ctx.measureText(valueText)
  const x = state.width / 2 - valueTextMetrics.width / 2
  const y = state.height / 2
  state.ctx.fillText(valueText, x, y)

  state.ctx.restore()
}
