import { Port } from '@cicada-lang/inet'
import { State } from '../../State'
import { NetRendering } from '../../net/NetRendering'
import { renderNet } from '../../net/renderNet'
import { renderButtonStep } from './renderButtonStep'

export function renderSelectedNet(
  state: State,
  port: Port,
  rendering: NetRendering,
): void {
  renderNet(state, rendering)
  renderButtonStep(state, rendering)
}
