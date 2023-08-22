import { State } from './State'
import { stateCurrent } from './stateCurrent'

export function stateRefresh(state: State): void {
  state.current = stateCurrent(state)
}
