import { State } from './State'
import { createSelected } from './selected/createSelected'

export function stateRefresh(state: State): void {
  state.selected = createSelected(state)
}
