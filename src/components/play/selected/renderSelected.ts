import { formatValue } from '@cicada-lang/inet'
import { State } from '../State'
import { renderNet } from '../net/renderNet'
import { Selected } from './Selected'

export function renderSelected(state: State, selected: Selected): void {
  state.ctx.save()

  if (selected['@kind'] === 'SelectedPort') {
    renderNet(state, selected.net, selected.layout)
  } else {
    const valueText = formatValue(selected.value)
    state.ctx.font = '38px monospace'
    const valueTextMetrics = state.ctx.measureText(valueText)
    const x = state.width / 2 - valueTextMetrics.width / 2
    const y = state.height / 2
    state.ctx.beginPath()
    state.ctx.fillText(valueText, x, y)
  }

  state.ctx.restore()
}
