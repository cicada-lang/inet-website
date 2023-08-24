import { Value, formatValue } from '@cicada-lang/inet'
import { State } from '../State'
import { Rect } from '../button/Rect'
import { createSelectedValue } from '../selected-value/createSelectedValue'

export function renderStackEntry(state: State, i: number, value: Value): void {
  const unitHeight = 36

  state.ctx.save()

  const valueText = formatValue(value)
  state.ctx.font = '16px monospace'
  const valueTextMetrics = state.ctx.measureText(valueText)
  const x = 0
  const y = state.height - unitHeight * (i + 1)
  const xPadding = 5
  const width = Math.max(100, valueTextMetrics.width + xPadding * 2)
  const height = unitHeight
  state.ctx.beginPath()
  const rect: Rect = [x, y, width, height]
  state.ctx.clearRect(...rect)
  state.ctx.strokeStyle = 'black'
  state.ctx.lineWidth = 1
  state.ctx.strokeRect(...rect)
  state.ctx.fillText(valueText, x + xPadding, y + unitHeight - 12)

  if (i === state.selectedStackIndex) {
    state.ctx.beginPath()
    state.ctx.lineWidth = 1.3
    state.ctx.moveTo(x + 5, y + unitHeight - 5)
    state.ctx.lineTo(x + width - 5, y + unitHeight - 5)
    state.ctx.stroke()
  }

  state.buttons.set(`state[${i}]`, {
    rect,
    handler: (state) => {
      state.selectedValue = createSelectedValue(state, value)
      state.selectedStackIndex = i
    },
  })

  state.ctx.restore()
}
