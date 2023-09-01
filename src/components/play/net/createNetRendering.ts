import { Net } from '@cicada-lang/inet'
import { NetLayout } from '../net/NetLayout'
import { NetRendering } from './NetRendering'

export function createNetRendering(net: Net, layout: NetLayout): NetRendering {
  return {
    net,
    layout,
    evolvingStep: 0,
    maximumStep: 1000,
    hoverableEdges: new Map(),
  }
}
