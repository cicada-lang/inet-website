import { Net, nodeKey } from '@cicada-lang/inet'

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
      neighbors.add(nodeKey(portEntry.connection.port.node))
    }
  }

  return neighbors
}
