import { Net } from '@cicada-lang/inet'
import { NetLayout } from '../net/NetLayout'
import { HoverableEdge } from './HoverableEdge'

export type NetRendering = {
  net: Net
  layout: NetLayout
  step: number
  maximumStep: number
  hoverableEdges: Map<string, HoverableEdge>
  hoveredEdge?: HoverableEdge
}
