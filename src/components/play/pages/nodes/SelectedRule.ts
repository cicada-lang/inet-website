import { Net } from '@cicada-lang/inet'
import { Rule } from '@cicada-lang/inet/lib/lang/rule'
import { NetLayout } from '../../net-layout/NetLayout'

export type SelectedRule = {
  name: string
  rule: Rule
  initial: {
    net: Net
    layout: NetLayout
    step: number
  }
  final: {
    net: Net
    layout: NetLayout
    step: number
  }
}
