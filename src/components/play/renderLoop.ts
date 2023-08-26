import { State } from './State'
import { handleClick } from './mouse/handleClick'
import { findRoute } from './route/findRoute'

export function renderLoop(state: State, passedTime?: number): void {
  passedTime = passedTime || 0
  const deltaTime = passedTime - state.lastTime
  state.lastTime = passedTime

  const route = findRoute(state)
  if (route === undefined) {
    throw new Error(
      [
        `[renderLoop] I can not find route.`,
        ``,
        `  state.path: ${state.currentRoute}`,
      ].join('\n'),
    )
  }

  route.render(state, { passedTime, deltaTime })

  handleClick(state, { deltaTime })

  requestAnimationFrame((passedTime) => renderLoop(state, passedTime))
}
