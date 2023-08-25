import { State } from './State'
import { renderHome } from './screens/home/renderHome'

export function renderLoop(state: State, passedTime?: number): void {
  passedTime = passedTime || 0
  const deltaTime = passedTime - state.lastTime

  renderHome(state, { passedTime, deltaTime })

  requestAnimationFrame((passedTime) => renderLoop(state, passedTime))
}
