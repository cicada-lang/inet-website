import { HalfEdge, Value } from '@cicada-lang/inet-js'
import { NetRendering } from '../../components/net/NetRendering'

export type SelectedValue = SelectedValueHalfEdge | SelectedValueGeneric

export type SelectedValueHalfEdge = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValueHalfEdge'
  halfEdge: HalfEdge
  netRendering: NetRendering
}

export type SelectedValueGeneric = {
  '@type': 'SelectedValue'
  '@kind': 'SelectedValueGeneric'
  value: Value
}
