import { Net } from '@cicada-lang/inet/lib/lang/net'
import { allEdges } from '@cicada-lang/inet/lib/lang/net/allEdges'
import { nodeKeyId } from '@cicada-lang/inet/lib/lang/node/nodeKeyId'
import { NetLayout } from './NetLayout'
import { State } from './State'
import { renderEdge } from './renderEdge'
import { renderNode } from './renderNode'

export function renderNet(state: State, net: Net, layout: NetLayout): void {
  for (const edge of allEdges(net)) {
    const firstPosition = layout.nodePositions.get(nodeKeyId(edge.first.node))
    if (firstPosition === undefined) continue
    const secondPosition = layout.nodePositions.get(nodeKeyId(edge.second.node))
    if (secondPosition === undefined) continue
    renderEdge(state, firstPosition, secondPosition)
  }

  for (const [id, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(id)
    if (position === undefined) continue
    renderNode(state, nodeEntry, position)
  }
}
