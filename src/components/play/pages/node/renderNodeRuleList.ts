import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { SelectedNode } from './SelectedNode'
import { renderNodeRuleListEntry } from './renderNodeRuleListEntry'
import { renderNodeRuleListLabel } from './renderNodeRuleListLabel'

export function renderNodeRuleList(
  state: State,
  selectedNode: SelectedNode,
): void {
  const height = themeSize(10)

  renderNodeRuleListLabel(state, selectedNode.ruleEntries.length)

  const ruleEntries = [...selectedNode.ruleEntries].reverse()

  for (const [i, ruleEntry] of ruleEntries.entries()) {
    renderNodeRuleListEntry(state, selectedNode, i, ruleEntry, { height })
  }
}
