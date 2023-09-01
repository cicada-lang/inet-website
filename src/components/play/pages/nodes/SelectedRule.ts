import { Rule } from '@cicada-lang/inet/lib/lang/rule'
import { NetRendering } from '../../net/NetRendering'

export type SelectedRule = {
  name: string
  rule: Rule
  initial: NetRendering
  final: NetRendering
}
