import { createEnv, findHalfEdgePort, formatValue } from '@cicada-lang/inet-js'
import { formatPort } from '@cicada-lang/inet-js/lib/lang/port/formatPort'
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

  const env = createEnv(state.mod, { net: rendering.net })

  const firstPort = findHalfEdgePort(rendering.net, first.halfEdge)
  const firstPortText = firstPort
    ? formatPort(rendering.net, firstPort)
    : '#unconnected'
  const firstTypeText = firstPort ? `  ${formatValue(env, firstPort.t)}` : `  `

  const secondPort = findHalfEdgePort(rendering.net, second.halfEdge)
  const secondPortText = secondPort
    ? formatPort(rendering.net, secondPort)
    : '#unconnected'
  const secondTypeText = secondPort
    ? `  ${formatValue(env, secondPort.t)}`
    : `  `

  const firstPortTextMetrics = state.ctx.measureText(firstPortText)
  const firstTypeTextMetrics = state.ctx.measureText(firstTypeText)
  const secondPortTextMetrics = state.ctx.measureText(secondPortText)
  const secondTypeTextMetrics = state.ctx.measureText(secondTypeText)

  const maxWidth = Math.max(
    firstPortTextMetrics.width,
    firstTypeTextMetrics.width,
    secondPortTextMetrics.width,
    secondTypeTextMetrics.width,
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
    firstTypeText,
    x + paddingX,
    y + lineHeight * 1 + textOffset,
  )

  state.ctx.fillText(
    secondPortText,
    x + paddingX,
    y + lineHeight * 2 + textOffset,
  )

  state.ctx.fillText(
    secondTypeText,
    x + paddingX,
    y + lineHeight * 3 + textOffset,
  )

  state.ctx.restore()
}
