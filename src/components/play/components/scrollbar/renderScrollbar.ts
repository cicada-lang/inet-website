import { State } from '../../State'
import { renderClickableRect } from '../rect/renderClickableRect'

export function renderScrollbar(
  state: State,
  options: {
    name: string
    x: number
    y: number
    width: number
    height: number
    length: number
    inViewLength: number
    cursor: number
    onScroll: (cursor: number) => void
  },
): void {
  const { name, x, y, width, height, cursor, length, inViewLength, onScroll } =
    options

  const padding = 5

  state.ctx.save()

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'

  for (let i = 0; i < cursor; i++) {
    renderClickableRect(state, x, y + (height / length) * i, {
      name: `${name}/${i}`,
      height: height / length,
      width,
      // withBorder: true,
      handler: () => onScroll(i),
    })
  }

  if (cursor > 0) {
    renderClickableRect(state, x, y + (height / length) * cursor, {
      name: `${name}/-1`,
      height: ((height / length) * inViewLength) / 2 - height / length / 2,
      width,
      // withBorder: true,
      handler: () => onScroll(cursor - 1),
    })
  }

  state.ctx.strokeRect(
    x + padding,
    y + (height / length) * cursor + padding,
    width - padding * 2,
    height * (inViewLength / length) - padding * 2,
  )

  if (cursor < length - inViewLength) {
    renderClickableRect(
      state,
      x,
      y +
        (height / length) * cursor +
        ((height / length) * inViewLength) / 2 +
        height / length / 2,
      {
        name: `${name}/+1`,
        height: ((height / length) * inViewLength) / 2 - height / length / 2,
        width,
        // withBorder: true,
        handler: () => onScroll(cursor + 1),
      },
    )
  }

  for (let i = cursor; i < length - inViewLength; i++) {
    renderClickableRect(state, x, y + (height / length) * (i + inViewLength), {
      name: `${name}/${i + 1}`,
      height: height / length,
      width,
      // withBorder: true,
      handler: () => onScroll(i + 1),
    })
  }

  state.ctx.restore()
}
