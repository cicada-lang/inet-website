import { createEnv } from '@cicada-lang/inet/lib/lang/env'
import { interact } from '@cicada-lang/inet/lib/lang/interact'
import { closeAllFreePorts } from '@cicada-lang/inet/lib/lang/run/closeAllFreePorts'
import { releaseCapPorts } from '@cicada-lang/inet/lib/lang/run/releaseCapPorts'
import { vectorMax } from '../../../utils/vector/vectorMax'
import { vectorMin } from '../../../utils/vector/vectorMin'
import { State } from '../State'
import { NetRendering } from './NetRendering'

export function runOneStep(state: State, rendering: NetRendering): void {
  const { mod } = state
  const { net, layout } = rendering

  const activeEdge = net.activeEdges.pop()
  if (activeEdge === undefined) {
    return
  }

  const env = createEnv(mod, { net })

  const capForFreePorts = closeAllFreePorts(mod, net)
  interact(env, activeEdge, {})
  releaseCapPorts(net, capForFreePorts)

  const deletedNodePositions = []
  for (const [key, position] of layout.nodePositions) {
    if (!net.nodeEntries.has(key)) {
      layout.nodePositions.delete(key)
      deletedNodePositions.push(position)
    }
  }

  const [maxX, maxY] = vectorMax(deletedNodePositions)
  const [minX, minY] = vectorMin(deletedNodePositions)

  for (const [key, nodeEntry] of net.nodeEntries) {
    if (!layout.nodePositions.has(key)) {
      layout.nodePositions.set(key, [
        minX + Math.random() * (maxX - minX),
        minY + Math.random() * (maxY - minY),
      ])
    }
  }

  rendering.step = 0
}
