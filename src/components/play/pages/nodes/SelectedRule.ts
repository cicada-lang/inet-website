import { Rule } from '@cicada-lang/inet/lib/lang/rule'
import { NetRendering } from '../../components/net/NetRendering'

export type SelectedRule = {
  name: string
  rule: Rule
  initial: NetRendering
  final: NetRendering
}
