import { Net } from '@cicada-lang/inet'
import { Port } from '@cicada-lang/inet'
import { Value } from '@cicada-lang/inet'
import { NetLayout } from './NetLayout'

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
