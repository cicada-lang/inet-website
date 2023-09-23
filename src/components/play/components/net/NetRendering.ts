import { Net } from '@cicada-lang/inet-js'
import { NetLayout } from '../net/NetLayout'
import { HoverableEdge } from './HoverableEdge'
import { HoverableNode } from './HoverableNode'

export type NetRendering = {
  name: string
  net: Net
  layout: NetLayout
  evolvingStep: number
  evolvingStepMaximum: number
  runningStep: number
  hoverableEdges: Map<string, HoverableEdge>
  hoveredEdge?: HoverableEdge
  hoveredNode?: HoverableNode
}
