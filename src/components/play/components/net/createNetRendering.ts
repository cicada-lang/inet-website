import { Net } from '@cicada-lang/inet-js'
import { NetLayout } from '../net/NetLayout'
import { NetRendering } from './NetRendering'

export function createNetRendering(
  name: string,
  net: Net,
  layout: NetLayout,
): NetRendering {
  return {
    name,
    net,
    layout,
    evolvingStep: 0,
    evolvingStepMaximum: 1000,
    runningStep: 0,
    hoverableEdges: new Map(),
  }
}
