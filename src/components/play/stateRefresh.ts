import { stateCurrent } from './current/stateCurrent'
import { State } from './State'

export function stateRefresh(state: State): void {
  state.current = stateCurrent(state)
}
