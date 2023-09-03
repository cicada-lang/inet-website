import { State } from '../../State'
import { NetRendering } from './NetRendering'
import { runOneStep } from './runOneStep'

export function runAllSteps(state: State, rendering: NetRendering): void {
  const { net } = rendering

  while (net.activeEdges.length > 0) {
    runOneStep(state, rendering)
  }
}
