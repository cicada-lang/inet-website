import { State } from '../State'
import { Rect } from '../button/Rect'

type Options = {
  height: number
  paddingX: number
  align?: 'left' | 'right'
}

// Can not be used after transform,
// because we need to record rect.

export function renderLabel(
  state: State,
  text: string,
  x: number,
  y: number,
  options: Options,
): void {
  const { paddingX } = options

  state.ctx.save()

  const textMetrics = state.ctx.measureText(text)
  const width = textMetrics.width + paddingX * 2
  const height = options.height

  if (options.align === 'right') {
    x = x - width
  }

  const rect: Rect = [x, y, width, height]
  state.ctx.clearRect(...rect)
  state.ctx.lineWidth = 1
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.strokeRect(...rect)

  const textOffset = 12
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillText(text, x + paddingX, y + height - textOffset)

  state.ctx.restore()
}
