import { State } from './State'
import { createCurrent } from './current/createCurrent'

export function stateRefresh(state: State): void {
  state.current = createCurrent(state)
}
