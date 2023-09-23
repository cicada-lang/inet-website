import { allEdges, findHalfEdgePort, nodeKey } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { NetRendering } from '../net/NetRendering'
import { renderCap } from './renderCap'
import { renderEdge } from './renderEdge'
import { renderHoveredEdge } from './renderHoveredEdge'
import { renderNode } from './renderNode'
import { updateHoveredEdge } from './updateHoveredEdge'

export function renderNet(state: State, rendering: NetRendering): void {
  const { net, layout } = rendering

  state.netRenderings.set(rendering.name, rendering)

  updateHoveredEdge(rendering)
  rendering.hoverableEdges = new Map()

  for (const edge of allEdges(net)) {
    const firstPort = findHalfEdgePort(rendering.net, edge.first)
    if (firstPort === undefined) continue
    const firstPosition = layout.nodePositions.get(nodeKey(firstPort.node))
    if (firstPosition === undefined) continue

    const secondPort = findHalfEdgePort(rendering.net, edge.second)
    if (secondPort === undefined) continue
    const secondPosition = layout.nodePositions.get(nodeKey(secondPort.node))
    if (secondPosition === undefined) continue

    renderEdge(
      state,
      rendering,
      { halfEdge: edge.first, position: firstPosition },
      { halfEdge: edge.second, position: secondPosition },
    )
  }

  rendering.hoveredNode = undefined

  for (const [id, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(id)
    if (position === undefined) continue

    if (nodeEntry.asTypeCap || nodeEntry.asPortCap) {
      renderCap(state, rendering, nodeEntry, position)
    } else {
      renderNode(state, rendering, nodeEntry, position)
    }
  }

  if (rendering.hoveredEdge) {
    renderHoveredEdge(state, rendering, rendering.hoveredEdge)
  }
}
