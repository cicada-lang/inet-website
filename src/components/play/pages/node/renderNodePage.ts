import { State } from '../../State'
import { renderBackButton } from '../../components/navbar/renderBackButton'
import { renderNavbar } from '../../components/navbar/renderNavbar'
import { evolveNet } from '../../components/net/evolveNet'
import { renderNodeList } from './renderNodeList'
import { renderNodeRuleList } from './renderNodeRuleList'
import { renderSelectedNode } from './renderSelectedNode'
import { selectFirstNode } from './selectFirstNode'

export function renderNodePage(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.nodeState.selectedNode === undefined) {
    selectFirstNode(state)
  }

  if (state.nodeState.selectedNode) {
    renderSelectedNode(state, state.nodeState.selectedNode)
    evolveNet(state, state.nodeState.selectedNode.rendering)

    if (state.nodeState.selectedRule) {
      evolveNet(state, state.nodeState.selectedRule.initial)
      evolveNet(state, state.nodeState.selectedRule.final)
    }
  }

  if (!state.isHidingUI) {
    renderNodeList(state)

    if (state.nodeState.selectedNode) {
      renderNodeRuleList(state, state.nodeState.selectedNode)
    }

    renderNavbar(state)
    if (state.history.length > 0) renderBackButton(state)
  }
}
