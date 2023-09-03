import { State } from '../State'
import { runGivenEdge } from '../net/runGivenEdge'
import { withinRect } from '../rect/withinRect'

export function handleClick(state: State): void {
  for (const button of state.buttons.values()) {
    if (withinRect(button.rect, state.mouse.position)) {
      if (!button.isDisabled?.(state)) {
        button.handler(state)
      }
    }
  }

  for (const clickableRect of state.clickableRects.values()) {
    if (withinRect(clickableRect.rect, state.mouse.position)) {
      clickableRect.handler(state)
    }
  }

  if (state.selectedValue?.['@kind'] === 'SelectedValuePort') {
    const { rendering } = state.selectedValue
    if (rendering.hoveredEdge) {
      const { first, second } = rendering.hoveredEdge
      if (first.port.isPrincipal && second.port.isPrincipal) {
        runGivenEdge(state, rendering, {
          first: first.port,
          second: second.port,
        })
      }
    }
  }
}
