import { NetRendering } from './NetRendering'

export function updateHoveredEdge(rendering: NetRendering): void {
  rendering.hoveredEdge = undefined
  let distance = Infinity
  for (const [key, hoverableEdge] of rendering.hoverableEdges) {
    if (hoverableEdge.distance < distance) {
      rendering.hoveredEdge = hoverableEdge
      distance = hoverableEdge.distance
    }
  }
}
