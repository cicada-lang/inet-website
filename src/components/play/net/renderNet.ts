import { allEdges, nodeKey } from '@cicada-lang/inet'
import { State } from '../State'
import { NetRendering } from '../net-rendering/NetRendering'
import { renderCap } from './renderCap'
import { renderEdge } from './renderEdge'
import { renderNode } from './renderNode'

export function renderNet(state: State, rendering: NetRendering): void {
  const { net, layout } = rendering

  for (const edge of allEdges(net)) {
    const firstPosition = layout.nodePositions.get(nodeKey(edge.first.node))
    if (firstPosition === undefined) continue
    const secondPosition = layout.nodePositions.get(nodeKey(edge.second.node))
    if (secondPosition === undefined) continue

    renderEdge(
      state,
      { port: edge.first, position: firstPosition },
      { port: edge.second, position: secondPosition },
    )
  }

  for (const [id, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(id)
    if (position === undefined) continue

    if (nodeEntry.asTypeCap || nodeEntry.asPortCap) {
      renderCap(state, nodeEntry, position)
    } else {
      renderNode(state, nodeEntry, position)
    }
  }
}
