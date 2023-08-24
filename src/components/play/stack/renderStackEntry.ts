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
  const y = state.height - unitHeight * i
  const xPadding = 5
  const boxWdith = Math.max(100, valueTextMetrics.width + xPadding * 2)
  const boxHeight = unitHeight
  state.ctx.beginPath()
  state.ctx.strokeStyle = 'black'
  state.ctx.lineWidth = 1
  const rect: Rect = [x, y - unitHeight, boxWdith, boxHeight]
  state.ctx.strokeRect(...rect)
  state.ctx.fillText(valueText, x + xPadding, y - 12)

  state.buttons.set(`state[${i}]`, {
    rect,
    handler: (state) => {
      state.selectedValue = createSelectedValue(state, value)
    },
  })

  state.ctx.restore()
}
