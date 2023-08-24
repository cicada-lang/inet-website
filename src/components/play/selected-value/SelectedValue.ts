import { Net, Port, Value } from '@cicada-lang/inet'
import { NetLayout } from '../net-layout/NetLayout'

export type SelectedValue = SelectedValuePort | SelectedValueGeneric

export type SelectedValuePort = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValuePort'
  port: Port
  net: Net
  layout: NetLayout
  evolvingStep: number
}

export type SelectedValueGeneric = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValueGeneric'
  value: Value
}
