import { State } from '../../State'
import { SelectedNode } from './SelectedNode'

export function selectRule(
  state: State,
  selectedNode: SelectedNode,
  name: string,
): void {
  for (const ruleEntry of selectedNode.ruleEntries) {
    selectedNode.selectedRule = {
      name,
      rule: ruleEntry,
    }
  }
}
