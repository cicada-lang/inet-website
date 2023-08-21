import { copyConnectedComponent } from '@cicada-lang/inet/lib/lang/net/copyConnectedComponent'
import { createNet } from '@cicada-lang/inet/lib/lang/net/createNet'
import { formatValue } from '@cicada-lang/inet/lib/lang/value/formatValue'
import { State } from './State'
import { renderNet } from './renderNet'

export function renderCurrentValue(state: State): void {
  const value = state.mod.env.stack[state.mod.env.stack.length - 1]
  if (value === undefined) {
    return
  }

  state.ctx.save()

  if (value['@kind'] === 'Port') {
    const net = createNet()
    copyConnectedComponent(state.mod.env.net, net, value.node)
    renderNet(state, net)
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
