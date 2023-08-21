import { formatValue } from '@cicada-lang/inet'
import { State } from './State'

export function renderStack(state: State): void {
  state.ctx.save()

  for (const [i, value] of state.mod.env.stack.entries()) {
    const valueText = formatValue(value)
    state.ctx.font = '18px monospace'
    const valueTextMetrics = state.ctx.measureText(valueText)
    const unitHeight = 36
    const x = 0
    const y = state.canvas.height - unitHeight * i
    const xPadding = 5
    const boxWdith = Math.max(100, valueTextMetrics.width + xPadding * 2)
    const boxHeight = unitHeight
    state.ctx.beginPath()
    state.ctx.strokeStyle = 'black'
    state.ctx.lineWidth = 0.5
    state.ctx.strokeRect(x, y - unitHeight, boxWdith, boxHeight)
    state.ctx.fillText(valueText, x + xPadding, y - 12)
  }

  state.ctx.restore()
}
