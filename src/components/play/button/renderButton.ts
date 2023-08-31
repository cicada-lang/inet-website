import { State } from '../State'
import { Rect } from '../rect/Rect'

type Options = {
  name: string
  height: number
  paddingX: number
  align?: 'left' | 'right'
  noBorder?: boolean
  handler: (state: State) => void
  isActive?: (state: State) => void
  isDisabled?: (state: State) => void
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
  options: Options,
): void {
  const { name, paddingX } = options

  state.ctx.save()

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
  if (!options.noBorder) {
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

  if (options.isDisabled?.(state)) {
    state.buttons.delete(name)
  } else {
    state.buttons.set(name, { rect, handler: options.handler })
  }

  state.ctx.restore()
}
