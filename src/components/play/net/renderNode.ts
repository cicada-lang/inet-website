import { NodeEntry, formatNode } from '@cicada-lang/inet'
import { State } from '../State'

export function renderNode(
  state: State,
  nodeEntry: NodeEntry,
  [x, y]: [number, number],
): void {
  state.ctx.save()

  state.ctx.strokeStyle = 'black'
  state.ctx.lineWidth = 1
  state.ctx.font = '20px monospace'
  state.ctx.textBaseline = 'middle'
  state.ctx.textAlign = 'center'

  const text = formatNode(nodeEntry)
  const textMetrics = state.ctx.measureText(text)

  const xPadding = 4
  const boxWidth = textMetrics.width + xPadding * 2
  const boxHeight = 26
  const boxX = x - boxWidth / 2
  const boxY = y - boxHeight / 2

  state.ctx.beginPath()
  state.ctx.clearRect(boxX, boxY, boxWidth, boxHeight)
  state.ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 8)
  state.ctx.stroke()

  state.ctx.fillText(text, x, y)

  state.ctx.restore()
}
