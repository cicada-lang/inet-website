import { State } from './State'
import { createSelectedValue } from './components/env/createSelectedValue'

export function stateRefresh(state: State): void {
  const value = state.mod.env.stack[state.mod.env.stack.length - 1]
  if (value) {
    const { envRendering } = state.homeState
    envRendering.selectedValue = createSelectedValue(envRendering, value)
    envRendering.stackInViewIndex = Math.min(
      envRendering.stackInViewLength - 1,
      state.mod.env.stack.length - 1,
    )
  }
}
