import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { renderNodeDefinition } from './renderNodeDefinition'
import { renderNodeList } from './renderNodeList'
import { renderNodeRuleList } from './renderNodeRuleList'
import { selectFirstNode } from './selectFirstNode'

export function renderNodes(state: State): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.selectedNode === undefined) {
    selectFirstNode(state)
  }

  if (state.selectedNode) {
    renderNodeDefinition(state, state.selectedNode.definition)
    renderNodeRuleList(state, state.selectedNode.definition)
  }

  if (!state.isHidingUI) {
    renderNodeList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderButtonBack(state)
  }
}
