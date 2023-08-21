import { State } from './State.ts'
import { stateCurrent } from './stateCurrent.ts'

export function stateRefresh(state: State): void {
  state.current = stateCurrent(state)
}
