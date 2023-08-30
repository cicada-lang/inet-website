import { State } from '../../State'
import { renderNet } from '../../net/renderNet'
import { SelectedNode } from './SelectedNode'

export function renderSelectedNode(
  state: State,
  selectedNode: SelectedNode,
): void {
  state.ctx.save()

  renderNet(state, selectedNode.net, selectedNode.layout)

  state.ctx.restore()
}
