import { Net } from '@cicada-lang/inet'
import { NetLayout } from '../net/NetLayout'
import { NetRendering } from './NetRendering'

export function createNetRendering(net: Net, layout: NetLayout): NetRendering {
  return {
    net,
    layout,
    evolvingStep: 0,
    evolvingStepMaximum: 1000,
    runningStep: 0,
    hoverableEdges: new Map(),
  }
}