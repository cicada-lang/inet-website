import { Net } from '@cicada-lang/inet'
import { NetLayout } from '../net-layout/NetLayout'

export type NetRendering = {
  net: Net
  layout: NetLayout
  step: number
}
