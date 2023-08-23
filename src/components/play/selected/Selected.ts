import { Net, Port, Value } from '@cicada-lang/inet'
import { NetLayout } from '../net-layout/NetLayout'

export type Selected = SelectedPort | SelectedValue

export type SelectedPort = {
  '@type': 'Selected'
  '@kind': 'SelectedPort'
  port: Port
  net: Net
  layout: NetLayout
  evolvingStep: number
}

export type SelectedValue = {
  '@type': 'Selected'
  '@kind': 'SelectedValue'
  value: Value
}
