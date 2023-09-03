import { State } from '../../State'
import { ClickableRect } from './ClickableRect'
import { Rect } from './Rect'

// Can not be used after transform,
// because we need to record rect.

export function renderClickableRect(
  state: State,
  clickableRect: ClickableRect,
): void {
  const { x, y, width, height } = clickableRect

  state.ctx.save()

  state.ctx.beginPath()
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  const rect: Rect = [x, y, width, height]

  if (clickableRect.noBorder) {
    state.ctx.lineWidth = 1
    state.ctx.strokeRect(...rect)
  }

  state.ctx.restore()
}
