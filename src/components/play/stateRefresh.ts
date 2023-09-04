import { State } from './State'
import { createHomeState } from './pages/home/createHomeState'

export function stateRefresh(state: State): void {
  state.homeState = createHomeState({
    env: state.mod.env,
    x: 0,
    y: 0,
    width: state.width,
    height: state.height,
  })
}
