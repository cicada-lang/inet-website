import { State } from '../../State'
import { renderNet } from '../../components/net/renderNet'
import { SelectedNode } from './SelectedNode'

export function renderSelectedNode(
  state: State,
  selectedNode: SelectedNode,
): void {
  state.ctx.save()

  renderNet(state, selectedNode.rendering)

  if (state.nodeState.selectedRule) {
    renderNet(state, state.nodeState.selectedRule.initial)
    renderNet(state, state.nodeState.selectedRule.final)
  }

  state.ctx.restore()
}
