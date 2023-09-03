import { State } from '../../State'
import { NetRendering } from './NetRendering'
import { runActiveEdge } from './runActiveEdge'

export function runOneStep(state: State, rendering: NetRendering): void {
  const { net } = rendering

  const activeEdge = net.activeEdges.pop()
  if (activeEdge === undefined) {
    return
  }

  runActiveEdge(state, rendering, activeEdge)
}
