import {
  Net,
  findHalfEdgeEntryOrFail,
  findHalfEdgePort,
  nodeKey,
} from '@cicada-lang/inet-js'

export function netNodeNeighbors(net: Net, nodeId: string): Set<string> {
  const neighbors: Set<string> = new Set()
  const nodeEntry = net.nodeEntries.get(nodeId)
  if (nodeEntry === undefined) {
    throw new Error(
      [
        `[netNodeNeighbors] I meet undefined node.`,
        ``,
        `  nodeId: ${nodeId}`,
      ].join('\n'),
    )
  }

  for (const [portName, portEntry] of Object.entries(nodeEntry.ports)) {
    if (portEntry.connection) {
      const halfEdge = portEntry.connection.halfEdge
      const halfEdgeEntry = findHalfEdgeEntryOrFail(net, halfEdge)
      const otherPort = findHalfEdgePort(net, halfEdgeEntry.otherHalfEdge)
      if (otherPort === undefined) continue
      neighbors.add(nodeKey(otherPort.node))
    }
  }

  return neighbors
}
