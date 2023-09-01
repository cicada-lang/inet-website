import { State } from '../State'
import { withinRect } from '../button/withinRect'
import { runGivenEdge } from '../net/runGivenEdge'

export function onClick(state: State): void {
  for (const button of state.buttons.values()) {
    if (withinRect(button.rect, state.mouse.position)) {
      button.handler(state)
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
