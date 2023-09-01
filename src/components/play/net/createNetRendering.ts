import { Net } from '@cicada-lang/inet'
import { NetLayout } from '../net/NetLayout'
import { NetRendering } from './NetRendering'

export function createNetRendering(net: Net, layout: NetLayout): NetRendering {
  return {
    net,
    layout,
    step: 0,
    maximumStep: 1000,
  }
}
