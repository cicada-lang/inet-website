import { Net, Port, Value } from '@cicada-lang/inet'
import { NetLayout } from '../../net-layout/NetLayout'

export type SelectedValue = (SelectedValuePort | SelectedValueGeneric) & {
  stackIndex?: number
  localName?: string
}

export type SelectedValuePort = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValuePort'
  port: Port
  net: Net
  layout: NetLayout
  step: number
}

export type SelectedValueGeneric = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValueGeneric'
  value: Value
}
