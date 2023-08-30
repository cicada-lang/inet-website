import { Net, NodeDefinition } from '@cicada-lang/inet'
import { RuleEntry } from '@cicada-lang/inet/lib/lang/mod/RuleEntry'
import { NetLayout } from '../../net-layout/NetLayout'
import { SelectedRule } from './SelectedRule'

export type SelectedNode = {
  name: string
  definition: NodeDefinition
  net: Net
  layout: NetLayout
  evolvingStep: number
  ruleEntries: Array<RuleEntry>
  selectedRule?: SelectedRule
}
