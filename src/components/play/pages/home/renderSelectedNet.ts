import { Port } from '@cicada-lang/inet'
import { State } from '../../State'
import { NetRendering } from '../../net/NetRendering'
import { renderNet } from '../../net/renderNet'
import { renderButtonRun } from './renderButtonRun'
import { renderButtonStep } from './renderButtonStep'
import { renderLabelInteract } from './renderLabelInteract'
import { renderLabelStepCounter } from './renderLabelStepCounter'

export function renderSelectedNet(
  state: State,
  port: Port,
  rendering: NetRendering,
): void {
  renderNet(state, rendering)

  if (!state.isHidingUI) {
    const offset = 2

    if (rendering.runningStep > 0) {
      renderLabelStepCounter(state, rendering, offset + 1)
    }

    renderLabelInteract(state, offset)

    renderButtonStep(state, rendering)
    renderButtonRun(state, rendering)
  }
}
