import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { Rect } from '../rect/Rect'
import { withinRect } from '../rect/withinRect'
import { Button } from './Button'

type Options = Omit<Button, 'rect'>

// Can not be used after transform,
// because we need to record rect.

export function renderButton(state: State, options: Options): void {
  const { name, text } = options
  let { x, y } = options

  const paddingX = themeSize(3)

  const textMetrics = state.ctx.measureText(text)
  const width = textMetrics.width + paddingX * 2
  const height = options.height

  if (options.align === 'right') {
    x = x - width
  }

  const rect: Rect = [x, y, width, height]

  state.buttons.set(name, { ...options, rect })

  state.ctx.save()

  state.ctx.beginPath()

  state.ctx.fillStyle =
    state.theme.name === 'dark'
      ? 'hsla(0, 50%, 0%, 40%)'
      : 'hsla(0, 50%, 100%, 40%)'

  state.ctx.fillRect(...rect)

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.lineWidth = 1
  if (!options.noBorder) {
    state.ctx.strokeRect(...rect)
  }

  const textOffset = 12
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'
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
