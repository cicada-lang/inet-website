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

  if (state.selectedNode === undefined) {
    selectFirstNode(state)
  }

  if (state.selectedNode) {
    renderSelectedNode(state, state.selectedNode)
    evolveNet(state, state.selectedNode.rendering)

    if (state.selectedNode.selectedRule) {
      evolveNet(state, state.selectedNode.selectedRule.initial)
      evolveNet(state, state.selectedNode.selectedRule.final)
    }
  }

  if (!state.isHidingUI) {
    renderNodeList(state)

    if (state.selectedNode) {
      renderNodeRuleList(state, state.selectedNode)
    }

    renderNavbar(state)
    if (state.history.length > 0) renderBackButton(state)
  }
}
