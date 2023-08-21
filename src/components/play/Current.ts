import { Net } from '@cicada-lang/inet/lib/lang/net'
import { Port } from '@cicada-lang/inet/lib/lang/port'
import { Value } from '@cicada-lang/inet/lib/lang/value'
import { NetLayout } from './NetLayout'

export type Current = CurrentPort | CurrentValue

export type CurrentPort = {
  '@type': 'Current'
  '@kind': 'CurrentPort'
  port: Port
  net: Net
  layout: NetLayout
  evolvingStep : number
}

export type CurrentValue = {
  '@type': 'Current'
  '@kind': 'CurrentValue'
  value: Value
}
