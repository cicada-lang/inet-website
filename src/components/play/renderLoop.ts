import { State } from './State'
import { findRoute } from './findRoute'

export function renderLoop(state: State, passedTime?: number): void {
  passedTime = passedTime || 0
  const deltaTime = passedTime - state.lastTime

  const route = findRoute(state)
  if (route === undefined) {
    throw new Error(
      [
        `[renderLoop] I can not find route.`,
        ``,
        `  state.path: ${state.path}`,
      ].join('\n'),
    )
  }

  route.render(state, { passedTime, deltaTime })

  requestAnimationFrame((passedTime) => renderLoop(state, passedTime))
}
