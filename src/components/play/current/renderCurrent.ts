import { formatValue } from '@cicada-lang/inet'
import { State } from '../State'
import { renderNet } from '../net/renderNet'
import { Current } from './Current'

export function renderCurrent(state: State, current: Current): void {
  state.ctx.save()

  if (current['@kind'] === 'CurrentPort') {
    renderNet(state, current.net, current.layout)
  } else {
    const valueText = formatValue(current.value)
    state.ctx.font = '38px monospace'
    const valueTextMetrics = state.ctx.measureText(valueText)
    const x = state.width / 2 - valueTextMetrics.width / 2
    const y = state.height / 2
    state.ctx.beginPath()
    state.ctx.fillText(valueText, x, y)
  }

  state.ctx.restore()
}
