import { Edge } from '@cicada-lang/inet'
import { edgeEqual } from '@cicada-lang/inet/lib/lang/edge/edgeEqual'
import { State } from '../State'
import { NetRendering } from './NetRendering'
import { runActiveEdge } from './runActiveEdge'

export function runGivenEdge(
  state: State,
  rendering: NetRendering,
  givenEdge: Edge,
): void {
  const { net } = rendering

  const index = net.activeEdges.findIndex((edge) => edgeEqual(edge, givenEdge))
  if (index === -1) {
    return
  }

  net.activeEdges.splice(index, 1)

  runActiveEdge(state, rendering, givenEdge)
}
