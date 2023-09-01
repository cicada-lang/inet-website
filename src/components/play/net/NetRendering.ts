import { Net } from '@cicada-lang/inet'
import { NetLayout } from '../net/NetLayout'
import { HoverableEdge } from './HoverableEdge'
import { HoverableNode } from './HoverableNode'

export type NetRendering = {
  net: Net
  layout: NetLayout
  evolvingStep: number
  evolvingStepMaximum: number
  runningStep: number
  hoverableEdges: Map<string, HoverableEdge>
  hoveredEdge?: HoverableEdge
  hoveredNode?: HoverableNode
}
