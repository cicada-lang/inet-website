import { State } from './State'
import { createSelectedValue } from './pages/home/createSelectedValue'

export function stateRefresh(state: State): void {
  const value = state.mod.env.stack[state.mod.env.stack.length - 1]
  if (value) {
    state.homeState.envRendering.selectedValue = createSelectedValue(
      state.homeState.envRendering,
      value,
    )
    state.homeState.envRendering.stackInViewIndex = Math.min(
      state.homeState.envRendering.stackInViewLength - 1,
      state.mod.env.stack.length - 1,
    )
  }
}
