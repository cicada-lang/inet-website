import { State } from '../../State'
import { renderClickableRect } from '../clickable-rect/renderClickableRect'

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

  const unitHeight = height / length

  const padding = 5

  state.ctx.save()

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.strokeRect(x, y, width, height)

  for (let i = 0; i < cursor; i++) {
    renderClickableRect(state, {
      name: `${name}/${i}`,
      x,
      y: y + unitHeight * i,
      height: height / length,
      width,
      // withBorder: true,
      onClick: () => onScroll(i),
    })
  }

  if (cursor > 0) {
    renderClickableRect(state, {
      name: `${name}/-1`,
      x,
      y: y + unitHeight * cursor,
      height: (unitHeight * inViewLength) / 2 - unitHeight / 2,
      width,
      // withBorder: true,
      onClick: () => onScroll(cursor - 1),
    })
  }

  state.ctx.strokeRect(
    x + padding,
    y + unitHeight * cursor + padding,
    width - padding * 2,
    height * (inViewLength / length) - padding * 2,
  )

  if (cursor < length - inViewLength) {
    renderClickableRect(state, {
      name: `${name}/+1`,
      x,
      y:
        y +
        unitHeight * cursor +
        (unitHeight * inViewLength) / 2 +
        unitHeight / 2,
      height: (unitHeight * inViewLength) / 2 - unitHeight / 2,
      width,
      // withBorder: true,
      onClick: () => onScroll(cursor + 1),
    })
  }

  for (let i = cursor; i < length - inViewLength; i++) {
    renderClickableRect(state, {
      name: `${name}/${i + 1}`,
      x,
      y: y + unitHeight * (i + inViewLength),
      height: unitHeight,
      width,
      // withBorder: true,
      onClick: () => onScroll(i + 1),
    })
  }

  state.ctx.restore()
}
