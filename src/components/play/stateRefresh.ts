import { State } from './State'
import { createSelectedValue } from './pages/home/createSelectedValue'

export function stateRefresh(state: State): void {
  const value = state.mod.env.stack[state.mod.env.stack.length - 1]
  if (value) {
    state.homeState.selectedValue = createSelectedValue(state, value)
  }
}
