import { State } from '../State'
import { Rect } from '../rect/Rect'
import { themeSize } from '../theme/themeSize'

type Options = {
  name: string
  height: number
  align?: 'left' | 'right'
  noBorder?: boolean
  handler: (state: State) => void
  isActive?: (state: State) => void
  isDisabled?: (state: State) => void
}

export function createButton(
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

  const left = options.align === 'right' ? x - width : x

  const rect: Rect = [left, y, width, height]

  state.buttons.set(name, {
    ...options,
    text,
    x,
    y,
    height,
    rect,
  })

  // if (options.isDisabled?.(state)) {
  //   state.buttons.delete(name)
  // } else {
  //   state.buttons.set(name, {
  //     ...options,
  //     text,
  //     x,
  //     y,
  //     height,
  //     rect,
  //   })
  // }
}
