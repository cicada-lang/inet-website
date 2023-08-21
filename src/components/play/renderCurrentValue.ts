import { formatValue } from '@cicada-lang/inet/lib/lang/value/formatValue'
import { State } from './State'

export function renderCurrentValue(state: State): void {
  const value = state.mod.env.stack[state.mod.env.stack.length - 1]
  if (value === undefined) {
    return
  }

  state.ctx.save()

  if (value['@kind'] === 'Port') {
    const valueText = formatValue(value)
    state.ctx.font = '38px monospace'
    const valueTextMetrics = state.ctx.measureText(valueText)
    const x = state.canvas.width / 2 - valueTextMetrics.width / 2
    const y = state.canvas.height / 2
    state.ctx.beginPath()
    state.ctx.fillText(valueText, x, y)
  } else {
    const valueText = formatValue(value)
    state.ctx.font = '38px monospace'
    const valueTextMetrics = state.ctx.measureText(valueText)
    const x = state.canvas.width / 2 - valueTextMetrics.width / 2
    const y = state.canvas.height / 2
    state.ctx.beginPath()
    state.ctx.fillText(valueText, x, y)
  }

  state.ctx.restore()
}
