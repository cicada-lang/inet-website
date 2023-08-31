import { NodeEntry, formatNode, nodeKey } from '@cicada-lang/inet'
import { State } from '../State'
import { renderClickableArea } from '../button/renderClickableArea'
import { selectNode } from '../pages/nodes/selectNode'
import { fontSize } from '../theme/fontSize'

export function renderNode(
  state: State,
  nodeEntry: NodeEntry,
  [x, y]: [number, number],
): void {
  state.ctx.save()

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.lineWidth = 1

  state.ctx.font = state.breakpoints.md
    ? `${fontSize('base')} monospace`
    : `${fontSize('sm')} monospace`

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

  const key = nodeKey(nodeEntry)

  renderClickableArea(state, boxX, boxY, {
    name: `nodes/${key}`,
    width: boxWidth,
    height: boxHeight,
    isDisabled: (state) =>
      state.currentRoute.name === 'nodes' &&
      state.selectedNode?.name === nodeEntry.name,
    handler: (state) => {
      if (state.currentRoute.name === 'home') {
        state.history.push(state.currentRoute)
      }

      state.currentRoute = { name: 'nodes' }

      selectNode(state, nodeEntry.name)
    },
  })

  state.ctx.restore()
}
