import { State } from './State'
import { createSelectedValue } from './selected-value/createSelectedValue'

export function stateRefresh(state: State): void {
  const value = state.mod.env.stack[state.mod.env.stack.length - 1]
  if (value) {
    state.selectedValue = createSelectedValue(state, value)
  }
}
