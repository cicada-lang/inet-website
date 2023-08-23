import { Net, Port, Value } from '@cicada-lang/inet'
import { NetLayout } from '../net-layout/NetLayout'

export type Current = CurrentPort | CurrentValue

export type CurrentPort = {
  '@type': 'Current'
  '@kind': 'CurrentPort'
  port: Port
  net: Net
  layout: NetLayout
  evolvingStep: number
}

export type CurrentValue = {
  '@type': 'Current'
  '@kind': 'CurrentValue'
  value: Value
}
