import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { evolveNet } from '../../net/evolveNet'
import { renderNodeList } from './renderNodeList'
import { renderNodeRuleList } from './renderNodeRuleList'
import { renderSelectedNode } from './renderSelectedNode'
import { selectFirstNode } from './selectFirstNode'

export function renderNodes(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.selectedNode === undefined) {
    selectFirstNode(state)
  }

  if (state.selectedNode) {
    renderSelectedNode(state, state.selectedNode)
    evolveNet(
      state,
      state.selectedNode.net,
      state.selectedNode.layout,
      state.selectedNode.evolvingStep++,
    )

    renderNodeRuleList(state, state.selectedNode)
  }

  if (!state.isHidingUI) {
    renderNodeList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderButtonBack(state)
  }
}
