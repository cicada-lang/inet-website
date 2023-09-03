import { State } from './State'
import { createSelectedValue } from './pages/home/createSelectedValue'

export function stateRefresh(state: State): void {
  const value = state.mod.env.stack[state.mod.env.stack.length - 1]
  if (value) {
    state.homeState.selectedValue = createSelectedValue(state, value)
    state.homeState.stackInViewIndex = Math.min(
      state.homeState.stackInViewLength - 1,
      state.mod.env.stack.length - 1,
    )
  }
}
