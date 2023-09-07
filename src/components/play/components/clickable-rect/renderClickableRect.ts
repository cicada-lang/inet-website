import { State } from '../../State'
import { Rect } from '../rect/Rect'
import { ClickableRect } from './ClickableRect'

type Options = ClickableRect

// Can not be used after transform,
// because we need to record rect.

export function renderClickableRect(state: State, options: Options): void {
  const { name, x, y, width, height } = options

  const rect: Rect = [x, y, width, height]

  state.clickableRects.set(name, options)

  state.ctx.save()

  state.ctx.beginPath()
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  if (options.withBorder) {
    state.ctx.lineWidth = 1
    state.ctx.strokeRect(...rect)
  }

  state.ctx.restore()
}
