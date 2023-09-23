import { findHalfEdgePortOrFail } from '@cicada-lang/inet-js'
import { State } from '../State'
import { runGivenEdge } from '../components/net/runGivenEdge'
import { withinRect } from '../components/rect/withinRect'

export function handleClick(state: State, event: MouseEvent): void {
  for (const button of state.buttons.values()) {
    if (withinRect(button.rect, state.mouse.position)) {
      if (!button.isDisabled?.(state)) {
        button.onClick(state, event)
      }
    }
  }

  for (const clickableRect of state.clickableRects.values()) {
    const { x, y, width, height } = clickableRect
    if (withinRect([x, y, width, height], state.mouse.position)) {
      if (!clickableRect.isDisabled?.(state)) {
        clickableRect.onClick(state, event)
      }
    }
  }

  for (const rendering of state.netRenderings.values()) {
    if (rendering.hoveredEdge) {
      const { first, second } = rendering.hoveredEdge
      const firstPort = findHalfEdgePortOrFail(rendering.net, first.halfEdge)
      const secondPort = findHalfEdgePortOrFail(rendering.net, second.halfEdge)
      if (firstPort.isPrincipal && secondPort.isPrincipal) {
        runGivenEdge(state, rendering, {
          first: first.halfEdge,
          second: second.halfEdge,
        })
      }
    }
  }
}
