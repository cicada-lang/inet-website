import { Edge, edgeEqual } from '@cicada-lang/inet-js'
import { State } from '../../State'
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

  const [activeEdge] = net.activeEdges.splice(index, 1)

  // TODO Can not just pass the `givenEdge` to `runActiveEdge`,
  //   must pass the original `activeEdge` from `net.activeEdges`,
  //   this should not be, but I do not know why.

  runActiveEdge(state, rendering, activeEdge)
}
