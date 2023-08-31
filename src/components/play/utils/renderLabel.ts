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
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'
  // state.ctx.fillStyle = state.theme.name === 'dark' ? colors.stone[300] : colors.stone[600]
  state.ctx.fillRect(...rect)

  // state.ctx.lineWidth = 0.2
  // state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  // state.ctx.strokeRect(...rect)
  // state.ctx.lineWidth = 0.8
  // state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  // const d = 2
  // for (let a = 0; a < width + height; a += d) {
  //   state.ctx.beginPath()
  //   state.ctx.moveTo(Math.min(x + a, x + width), Math.max(y, y + a - width))
  //   state.ctx.lineTo(Math.max(x, x + a - height), Math.min(y + a, y + height))
  //   state.ctx.stroke()
  // }

  const textOffset = 12
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'black' : 'white'
  state.ctx.fillText(text, x + paddingX, y + height - textOffset)

  state.ctx.restore()
}
