import { State } from '../../State'
import { Rect } from './Rect'

type Options = {
  name: string
  height: number
  width: number
  noBorder?: boolean
  handler: (state: State) => void
  isDisabled?: (state: State) => void
}

// Can not be used after transform,
// because we need to record rect.

export function renderClickableRect(
  state: State,
  x: number,
  y: number,
  options: Options,
): void {
  const { name, width, height } = options

  const rect: Rect = [x, y, width, height]

  state.clickableRects.set(name, {
    ...options,
    name,
    x,
    y,
    rect,
  })

  state.ctx.save()

  state.ctx.beginPath()
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  if (options.noBorder) {
    state.ctx.lineWidth = 1
    state.ctx.strokeRect(...rect)
  }

  state.ctx.restore()
}
