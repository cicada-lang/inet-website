import { State } from '../State'
import { Rect } from './Rect'

export type RenderButtonOptions = {
  name: string
  font: string
  height: number
  paddingX: number
  align?: 'left' | 'right'
  withBorder?: boolean
  handler: (state: State) => void
  isActive?: (state: State) => void
  activeUnderline?: {
    offset: number
    width: number
  }
}

// Can not be used after transform,
// because we need to record rect.

export function renderButton(
  state: State,
  text: string,
  x: number,
  y: number,
  options: RenderButtonOptions,
): void {
  const { name, paddingX } = options

  state.ctx.save()

  state.ctx.font = options.font
  const textMetrics = state.ctx.measureText(text)
  const width = textMetrics.width + paddingX * 2
  const height = options.height

  if (options.align === 'right') {
    x = x - width
  }

  state.ctx.beginPath()
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  const rect: Rect = [x, y, width, height]
  state.ctx.clearRect(...rect)
  state.ctx.lineWidth = 1
  if (options.withBorder) {
    state.ctx.strokeRect(...rect)
  }

  const textOffset = 12
  state.ctx.fillText(text, x + paddingX, y + height - textOffset)

  if (options.isActive?.(state) && options.activeUnderline) {
    state.ctx.lineWidth = options.activeUnderline.width
    const underlineOffset = options.activeUnderline.offset
    state.ctx.moveTo(x + paddingX, y + height - underlineOffset)
    state.ctx.lineTo(x + width - paddingX, y + height - underlineOffset)
    state.ctx.stroke()
  }

  state.buttons.set(name, { rect, handler: options.handler })

  state.ctx.restore()
}
