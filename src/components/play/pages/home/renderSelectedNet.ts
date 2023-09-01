import { Port } from '@cicada-lang/inet'
import { State } from '../../State'
import { NetRendering } from '../../net/NetRendering'
import { renderNet } from '../../net/renderNet'
import { renderButtonStep } from './renderButtonStep'
import { renderLabelInteract } from './renderLabelInteract'

export function renderSelectedNet(
  state: State,
  port: Port,
  rendering: NetRendering,
): void {
  renderNet(state, rendering)

  renderLabelInteract(state, 1)
  renderButtonStep(state, rendering)
}
