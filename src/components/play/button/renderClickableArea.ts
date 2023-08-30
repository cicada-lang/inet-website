import { State } from '../State'
import { Rect } from './Rect'

type Options = {
  name: string
  height: number
  width: number
  withBorder?: boolean
  handler: (state: State) => void
  isDisabled?: (state: State) => void
}

// Can not be used after transform,
// because we need to record rect.

export function renderClickableArea(
  state: State,
  x: number,
  y: number,
  options: Options,
): void {
  const { name, width, height } = options

  state.ctx.save()

  state.ctx.beginPath()
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  const rect: Rect = [x, y, width, height]

  if (options.withBorder) {
    state.ctx.lineWidth = 1
    state.ctx.strokeRect(...rect)
  }

  if (options.isDisabled?.(state)) {
    state.buttons.delete(name)
  } else {
    state.buttons.set(name, { rect, handler: options.handler })
  }

  state.ctx.restore()
}
