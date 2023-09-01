import { Port, Value } from '@cicada-lang/inet'
import { NetRendering } from '../../net/NetRendering'

export type SelectedValue = (SelectedValuePort | SelectedValueGeneric) & {
  stackIndex?: number
  localName?: string
}

export type SelectedValuePort = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValuePort'
  port: Port
  rendering: NetRendering
}

export type SelectedValueGeneric = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValueGeneric'
  value: Value
}
