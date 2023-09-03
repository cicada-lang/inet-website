import { NodeDefinition, RuleEntry } from '@cicada-lang/inet'
import { NetRendering } from '../../components/net/NetRendering'
import { SelectedRule } from './SelectedRule'

export type SelectedNode = {
  name: string
  definition: NodeDefinition
  rendering: NetRendering
  ruleEntries: Array<RuleEntry>
  selectedRule?: SelectedRule
}
