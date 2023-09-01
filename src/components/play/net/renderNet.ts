import { allEdges, nodeKey } from '@cicada-lang/inet'
import { State } from '../State'
import { NetRendering } from '../net/NetRendering'
import { renderCap } from './renderCap'
import { renderEdge } from './renderEdge'
import { renderNode } from './renderNode'
import { updateHoveredEdge } from './updateHoveredEdge'

export function renderNet(state: State, rendering: NetRendering): void {
  const { net, layout } = rendering

  updateHoveredEdge(rendering)

  for (const edge of allEdges(net)) {
    const firstPosition = layout.nodePositions.get(nodeKey(edge.first.node))
    if (firstPosition === undefined) continue
    const secondPosition = layout.nodePositions.get(nodeKey(edge.second.node))
    if (secondPosition === undefined) continue

    renderEdge(
      state,
      rendering,
      { port: edge.first, position: firstPosition },
      { port: edge.second, position: secondPosition },
    )
  }

  for (const [id, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(id)
    if (position === undefined) continue

    if (nodeEntry.asTypeCap || nodeEntry.asPortCap) {
      renderCap(state, rendering, nodeEntry, position)
    } else {
      renderNode(state, rendering, nodeEntry, position)
    }
  }
}
