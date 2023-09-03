import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { Rect } from '../rect/Rect'
import { withinRect } from '../rect/withinRect'

type Options = {
  name: string
  height: number
  align?: 'left' | 'right'
  noBorder?: boolean
  handler: (state: State) => void
  isActive?: (state: State) => void
  isDisabled?: (state: State) => void
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
  const { name } = options

  const paddingX = themeSize(3)

  const textMetrics = state.ctx.measureText(text)
  const width = textMetrics.width + paddingX * 2
  const height = options.height

  if (options.align === 'right') {
    x = x - width
  }

  const rect: Rect = [x, y, width, height]

  state.buttons.set(name, {
    ...options,
    text,
    x,
    y,
    height,
    rect,
  })

  state.ctx.save()

  state.ctx.beginPath()
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.clearRect(...rect)
  state.ctx.lineWidth = 1
  if (!options.noBorder) {
    state.ctx.strokeRect(...rect)
  }

  const textOffset = 12
  state.ctx.fillText(text, x + paddingX, y + height - textOffset)

  if (withinRect(rect, state.mouse.position) || options.isActive?.(state)) {
    state.ctx.lineWidth = 1.5
    const underlineOffset = 8
    state.ctx.moveTo(x + paddingX, y + height - underlineOffset)
    state.ctx.lineTo(x + width - paddingX, y + height - underlineOffset)
    state.ctx.stroke()
  }

  state.ctx.restore()
}