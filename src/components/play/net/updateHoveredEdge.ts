import { NetRendering } from './NetRendering'

export function updateHoveredEdge(rendering: NetRendering): void {
  if (rendering.hoveredNode) {
    rendering.hoveredEdge = undefined
    return
  }

  rendering.hoveredEdge = undefined
  const distance = 6
  for (const [key, hoverableEdge] of rendering.hoverableEdges) {
    if (hoverableEdge.distance < distance) {
      rendering.hoveredEdge = hoverableEdge
    }
  }
}
