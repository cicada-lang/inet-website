import { Edge, createEnv, formatEdge, interact } from '@cicada-lang/inet-js'
import { vectorMax } from '../../../../utils/vector/vectorMax'
import { vectorMin } from '../../../../utils/vector/vectorMin'
import { State } from '../../State'
import { NetRendering } from './NetRendering'

export function runActiveEdge(
  state: State,
  rendering: NetRendering,
  activeEdge: Edge,
): void {
  const { mod } = state
  const { net, layout } = rendering

  const env = createEnv(mod, { net })

  interact(env, activeEdge, {})

  const deletedNodePositions = []
  for (const [key, position] of layout.nodePositions) {
    if (!net.nodeEntries.has(key)) {
      layout.nodePositions.delete(key)
      deletedNodePositions.push(position)
    }
  }

  if (deletedNodePositions.length === 0) {
    throw new Error(
      [
        `[runActiveEdge] I expect two deleted node after one interaction.`,
        ``,
        `  activeEdge: ${formatEdge(rendering.net, activeEdge)}`,
      ].join('\n'),
    )
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

  rendering.runningStep++
  rendering.evolvingStep = 0
}
