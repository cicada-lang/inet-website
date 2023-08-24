import { State } from './State'
import { createSelectedValue } from './selected-value/createSelectedValue'

export function stateRefresh(state: State): void {
  state.selectedValue = createSelectedValue(state)
}
