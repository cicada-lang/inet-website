import { State } from '../State'
import { withinRect } from '../rect/withinRect'
import { themeSize } from '../theme/themeSize'
import { Button } from './Button'

// Can not be used after transform,
// because we need to record rect.

export function renderButton(state: State, button: Button): void {
  const { text, height } = button
  let { x, y } = button

  const paddingX = themeSize(3)

  state.ctx.save()

  const textMetrics = state.ctx.measureText(text)
  const width = textMetrics.width + paddingX * 2

  if (button.align === 'right') {
    x = x - width
  }

  state.ctx.beginPath()
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.clearRect(...button.rect)
  state.ctx.lineWidth = 1
  if (!button.noBorder) {
    state.ctx.strokeRect(...button.rect)
  }

  const textOffset = 12
  state.ctx.fillText(text, x + paddingX, y + height - textOffset)

  if (
    withinRect(button.rect, state.mouse.position) ||
    button.isActive?.(state)
  ) {
    state.ctx.lineWidth = 1.5
    const underlineOffset = 8
    state.ctx.moveTo(x + paddingX, y + height - underlineOffset)
    state.ctx.lineTo(x + width - paddingX, y + height - underlineOffset)
    state.ctx.stroke()
  }

  state.ctx.restore()
}
