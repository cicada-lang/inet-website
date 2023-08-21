import { formatValue } from '@cicada-lang/inet/lib/lang/value/formatValue'
import { State } from './State'

export function renderStack(state: State): void {
  for (const [i, value] of state.mod.env.stack.entries()) {
    const valueText = formatValue(value)
    const valueTextMetrics = state.ctx.measureText(valueText)
    state.ctx.beginPath()
    const unitHeight = 36
    const x = 0
    const y = state.canvas.height - unitHeight * i
    const xPadding = 5
    const boxWdith = Math.max(100, valueTextMetrics.width + xPadding * 2)
    const boxHeight = unitHeight
    state.ctx.strokeRect(x, y - unitHeight, boxWdith, boxHeight)
    state.ctx.font = '18px sans-serif'
    state.ctx.fillText(valueText, x + xPadding, y - 12)
  }
}
