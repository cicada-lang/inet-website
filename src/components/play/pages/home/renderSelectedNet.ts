import { Port } from '@cicada-lang/inet'
import { State } from '../../State'
import { NetRendering } from '../../net/NetRendering'
import { renderNet } from '../../net/renderNet'
import { renderInteractLabel } from './renderInteractLabel'
import { renderRunButton } from './renderRunButton'
import { renderStepButton } from './renderStepButton'
import { renderStepCounterLabel } from './renderStepCounterLabel'

export function renderSelectedNet(
  state: State,
  port: Port,
  rendering: NetRendering,
): void {
  renderNet(state, rendering)

  if (!state.isHidingUI) {
    const offset = 2

    if (rendering.runningStep > 0) {
      renderStepCounterLabel(state, rendering, offset + 1)
    }

    renderInteractLabel(state, offset)

    renderStepButton(state, rendering)
    renderRunButton(state, rendering)
  }
}
