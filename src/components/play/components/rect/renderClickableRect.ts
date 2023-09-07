import { State } from '../../State'
import { Rect } from './Rect'

type Options = {
  name: string
  x: number
  y: number
  height: number
  width: number
  withBorder?: boolean
  onClick: (state: State) => void
  isDisabled?: (state: State) => void
}

// Can not be used after transform,
// because we need to record rect.

export function renderClickableRect(state: State, options: Options): void {
  const { name, x, y, width, height } = options

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

  if (options.withBorder) {
    state.ctx.lineWidth = 1
    state.ctx.strokeRect(...rect)
  }

  state.ctx.restore()
}
