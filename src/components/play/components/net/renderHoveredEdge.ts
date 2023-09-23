import { formatHalfEdge } from '@cicada-lang/inet-js/lib/lang/half-edge/formatHalfEdge'
import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { NetRendering } from '../net/NetRendering'
import { Rect } from '../rect/Rect'
import { HoverableEdge } from './HoverableEdge'

export function renderHoveredEdge(
  state: State,
  rendering: NetRendering,
  hoveredEdge: HoverableEdge,
): void {
  const { first, second } = hoveredEdge

  state.ctx.save()

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  const firstPortText = formatHalfEdge(rendering.net, first.halfEdge)
  // const firstTypeText = `  ${formatValue(first.port.t)}`
  const secondPortText = formatHalfEdge(rendering.net, second.halfEdge)
  // const secondTypeText = `  ${formatValue(second.port.t)}`

  const firstPortTextMetrics = state.ctx.measureText(firstPortText)
  // const firstTypeTextMetrics = state.ctx.measureText(firstTypeText)
  const secondPortTextMetrics = state.ctx.measureText(secondPortText)
  // const secondTypeTextMetrics = state.ctx.measureText(secondTypeText)

  const maxWidth = Math.max(
    firstPortTextMetrics.width,
    // firstTypeTextMetrics.width,
    secondPortTextMetrics.width,
    // secondTypeTextMetrics.width,
  )

  const lineHeight = themeSize(5)
  const textOffset = themeSize(6)
  const paddingX = themeSize(2)
  const paddingY = themeSize(2)

  const [x, y] = state.mouse.position
  const width = maxWidth + paddingX * 2
  const height = lineHeight * 4 + paddingY * 2
  const rect: Rect = [x, y, width, height]

  state.ctx.beginPath()
  state.ctx.strokeRect(...rect)

  state.ctx.fillStyle =
    state.theme.name === 'dark'
      ? 'hsla(0, 50%, 0%, 80%)'
      : 'hsla(0, 50%, 100%, 80%)'

  state.ctx.fillRect(...rect)

  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.fillText(
    firstPortText,
    x + paddingX,
    y + lineHeight * 0 + textOffset,
  )

  state.ctx.fillText(
    secondPortText,
    x + paddingX,
    y + lineHeight * 1 + textOffset,
  )

  state.ctx.restore()
}
