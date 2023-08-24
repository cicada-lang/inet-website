import { formatValue } from '@cicada-lang/inet'
import { State } from '../State'
import { renderNet } from '../net/renderNet'
import { SelectedValue } from './SelectedValue'

export function renderSelectedValue(state: State, selectedValue: SelectedValue): void {
  state.ctx.save()

  if (selectedValue['@kind'] === 'SelectedValuePort') {
    renderNet(state, selectedValue.net, selectedValue.layout)
  } else {
    const valueText = formatValue(selectedValue.value)
    state.ctx.font = '38px monospace'
    const valueTextMetrics = state.ctx.measureText(valueText)
    const x = state.width / 2 - valueTextMetrics.width / 2
    const y = state.height / 2
    state.ctx.beginPath()
    state.ctx.fillText(valueText, x, y)
  }

  state.ctx.restore()
}
