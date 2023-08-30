import { State } from '../../State'
import { renderNet } from '../../net/renderNet'
import { SelectedNode } from './SelectedNode'

export function renderSelectedNode(
  state: State,
  selectedNode: SelectedNode,
): void {
  state.ctx.save()

  renderNet(state, selectedNode.net, selectedNode.layout)

  if (selectedNode.selectedRule) {
    renderNet(
      state,
      selectedNode.selectedRule.initial.net,
      selectedNode.selectedRule.initial.layout,
    )

    renderNet(
      state,
      selectedNode.selectedRule.final.net,
      selectedNode.selectedRule.final.layout,
    )
  }

  state.ctx.restore()
}
