import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { Rect } from '../rect/Rect'

type Options = {
  text: string
  x: number
  y: number
  height: number
  align?: 'left' | 'right'
}

// Can not be used after transform,
// because we need to record rect.

export function renderLabel(state: State, options: Options): void {
  const { text } = options
  let { x, y } = options

  const paddingX = themeSize(3)

  state.ctx.save()

  const textMetrics = state.ctx.measureText(text)
  const width = textMetrics.width + paddingX * 2
  const height = options.height

  if (options.align === 'right') {
    x = x - width
  }

  const rect: Rect = [x, y, width, height]

  state.ctx.fillStyle =
    state.theme.name === 'dark'
      ? 'hsla(0, 50%, 0%, 40%)'
      : 'hsla(0, 50%, 100%, 40%)'

  state.ctx.fillRect(...rect)

  state.ctx.lineWidth = 1
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.strokeRect(...rect)

  const textOffset = 12
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillText(text, x + paddingX, y + height - textOffset)

  state.ctx.restore()
}
