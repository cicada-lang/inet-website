import { Value, formatValue } from '@cicada-lang/inet'
import { State } from '../State'

export function renderStackEntry(state: State, i: number, value: Value): void {
  state.ctx.save()

  const valueText = formatValue(value)
  state.ctx.font = '16px monospace'
  const valueTextMetrics = state.ctx.measureText(valueText)
  const unitHeight = 36
  const x = 0
  const y = state.height - unitHeight * i
  const xPadding = 5
  const boxWdith = Math.max(100, valueTextMetrics.width + xPadding * 2)
  const boxHeight = unitHeight
  state.ctx.beginPath()
  state.ctx.strokeStyle = 'black'
  state.ctx.lineWidth = 1
  state.ctx.strokeRect(x, y - unitHeight, boxWdith, boxHeight)
  state.ctx.fillText(valueText, x + xPadding, y - 12)

  state.ctx.restore()
}
