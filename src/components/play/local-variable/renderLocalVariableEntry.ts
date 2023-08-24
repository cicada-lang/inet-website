import { Value } from '@cicada-lang/inet'
import { State } from '../State'
import { Rect } from '../button/Rect'
import { createSelectedValue } from '../selected-value/createSelectedValue'

export function renderLocalVariableEntry(
  state: State,
  i: number,
  name: string,
  value: Value,
): void {
  state.ctx.save()

  state.ctx.font = state.breakpoints.md ? '16px monospace' : '14px monospace'
  const nameText = '$' + name
  const nameTextMetrics = state.ctx.measureText(nameText)
  const paddingX = 10
  const width = nameTextMetrics.width + paddingX * 2
  const height = 34
  const x = 0
  const y = 0 + height * i

  state.ctx.beginPath()
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  const rect: Rect = [x, y, width, height]
  state.ctx.clearRect(...rect)
  state.ctx.lineWidth = 1
  // state.ctx.strokeRect(...rect)
  const textOffset = 12
  state.ctx.fillText(nameText, x + paddingX, y + height - textOffset)

  if (name === state.selectedLocalName) {
    state.ctx.lineWidth = 1.5
    const underlineOffset = 5
    state.ctx.moveTo(x + paddingX, y + height - underlineOffset)
    state.ctx.lineTo(x + width - paddingX, y + height - underlineOffset)
    state.ctx.stroke()
  }

  state.buttons.set(`locals.${name}`, {
    rect,
    handler: (state) => {
      state.selectedValue = createSelectedValue(state, value)
      state.selectedLocalName = name
    },
  })

  state.ctx.restore()
}
