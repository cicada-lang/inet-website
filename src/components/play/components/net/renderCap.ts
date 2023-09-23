import { NodeEntry } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'
import { NetRendering } from '../net/NetRendering'

export function renderCap(
  state: State,
  rendering: NetRendering,
  nodeEntry: NodeEntry,
  [x, y]: [number, number],
): void {
  state.ctx.save()

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.beginPath()
  state.ctx.arc(x, y, 5, 0, Math.PI * 2)
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'black' : 'white'
  state.ctx.fill()
  state.ctx.stroke()

  if (nodeEntry.asPortCap) {
    state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
    state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

    state.ctx.lineWidth = 1

    state.ctx.font = state.breakpoints.lg
      ? `${themeFontSize('lg')} monospace`
      : `${themeFontSize('base')} monospace`

    state.ctx.textBaseline = 'middle'
    state.ctx.textAlign = 'center'

    const text = nodeEntry.asPortCap.portName
    const textMetrics = state.ctx.measureText(text)

    const xPadding = 4
    const boxWidth = textMetrics.width
    const boxHeight = 20
    const boxX = x - boxWidth / 2
    const boxY = y - boxHeight / 2

    state.ctx.beginPath()
    state.ctx.clearRect(boxX, boxY, boxWidth, boxHeight)
    state.ctx.stroke()

    state.ctx.fillText(text, x, y)
  }

  state.ctx.restore()
}
