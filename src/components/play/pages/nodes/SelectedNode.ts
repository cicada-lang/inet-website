import { NodeDefinition } from '@cicada-lang/inet'
import { RuleEntry } from '@cicada-lang/inet/lib/lang/mod/RuleEntry'
import { SelectedRule } from './SelectedRule'

export type SelectedNode = {
  name: string
  definition: NodeDefinition
  ruleEntries: Array<RuleEntry>
  selectedRule?: SelectedRule
}
