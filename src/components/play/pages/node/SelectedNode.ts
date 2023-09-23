import { NodeDefinition, RuleEntry } from '@cicada-lang/inet-js'
import { NetRendering } from '../../components/net/NetRendering'

export type SelectedNode = {
  name: string
  definition: NodeDefinition
  rendering: NetRendering
  ruleEntries: Array<RuleEntry>
  rulesScrollCursor?: number
}
