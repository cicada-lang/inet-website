import { NodeEntry, formatNode, nodeKey } from '@cicada-lang/inet'
import { State } from '../../State'
import { selectNode } from '../../pages/node/selectNode'
import { themeFontSize } from '../../theme/themeFontSize'
import { NetRendering } from '../net/NetRendering'
import { Rect } from '../rect/Rect'
import { renderClickableRect } from '../rect/renderClickableRect'
import { withinRect } from '../rect/withinRect'

export function renderNode(
  state: State,
  rendering: NetRendering,
  nodeEntry: NodeEntry,
  [x, y]: [number, number],
): void {
  state.ctx.save()

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.lineWidth = 1

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  state.ctx.textBaseline = 'middle'
  state.ctx.textAlign = 'center'

  const text = formatNode(nodeEntry)
  const textMetrics = state.ctx.measureText(text)

  const xPadding = 4
  const boxWidth = textMetrics.width + xPadding * 2
  const boxHeight = 26
  const boxX = x - boxWidth / 2
  const boxY = y - boxHeight / 2

  const rect: Rect = [boxX, boxY, boxWidth, boxHeight]
  state.ctx.beginPath()
  state.ctx.clearRect(...rect)
  state.ctx.roundRect(...rect, 8)
  state.ctx.stroke()

  if (withinRect(rect, state.mouse.position)) {
    rendering.hoveredNode = {
      position: [x, y],
    }

    state.ctx.beginPath()
    state.ctx.lineWidth = 1.5
    state.ctx.roundRect(boxX - 4, boxY - 4, boxWidth + 8, boxHeight + 8, 12)
    state.ctx.stroke()
  }

  state.ctx.fillText(text, x, y)

  const key = nodeKey(nodeEntry)

  renderClickableRect(state, {
    name: `nodes/${key}`,
    x: boxX,
    y: boxY,
    width: boxWidth,
    height: boxHeight,
    isDisabled: (state) =>
      state.currentRoute.name === 'node' &&
      state.nodeState.selectedNode?.name === nodeEntry.name,
    onClick: (state) => {
      if (state.mouse.ctrlKey) {
        if (state.currentRoute.name === 'home') {
          state.history.push(state.currentRoute)
        }

        state.currentRoute = { name: 'node' }

        selectNode(state, nodeEntry.name)
      }
    },
  })

  state.ctx.restore()
}
