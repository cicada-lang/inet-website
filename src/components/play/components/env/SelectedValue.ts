import { Port, Value } from '@cicada-lang/inet-cute'
import { NetRendering } from '../../components/net/NetRendering'

export type SelectedValue = SelectedValuePort | SelectedValueGeneric

export type SelectedValuePort = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValuePort'
  port: Port
  netRendering: NetRendering
}

export type SelectedValueGeneric = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValueGeneric'
  value: Value
}
