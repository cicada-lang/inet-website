import { State } from './State'
import { maybeSelectTopValue } from './components/env/maybeSelectTopValue'

export function stateRefresh(state: State): void {
  maybeSelectTopValue(state.homeState.envRendering)
}
