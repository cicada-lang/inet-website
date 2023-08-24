import { Net, Port, Value } from '@cicada-lang/inet'
import { NetLayout } from '../net-layout/NetLayout'

export type SelectedValue = SelectedValuePort | SelectedValueValue

export type SelectedValuePort = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValuePort'
  port: Port
  net: Net
  layout: NetLayout
  evolvingStep: number
}

export type SelectedValueValue = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValueValue'
  value: Value
}
