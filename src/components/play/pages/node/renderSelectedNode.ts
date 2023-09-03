import { State } from '../../State'
import { renderNet } from '../../components/net/renderNet'
import { SelectedNode } from './SelectedNode'

export function renderSelectedNode(
  state: State,
  selectedNode: SelectedNode,
): void {
  state.ctx.save()

  renderNet(state, selectedNode.rendering)

  if (selectedNode.selectedRule) {
    renderNet(state, selectedNode.selectedRule.initial)
    renderNet(state, selectedNode.selectedRule.final)
  }

  state.ctx.restore()
}
