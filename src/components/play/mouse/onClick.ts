import { State } from '../State'
import { withinRect } from '../button/withinRect'

export function onClick(state: State): void {
  state.selectedStackIndex = undefined
  state.selectedLocalName = undefined

  for (const button of state.buttons.values()) {
    if (withinRect(button.rect, state.mouse.position)) {
      button.handler(state)
    }
  }
}
