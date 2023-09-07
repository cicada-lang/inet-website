import { State } from './State'
import { renderToggleUIButton } from './components/toggle-ui/renderToggleUIButton'
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

  state.buttons = new Map()
  state.clickableRects = new Map()
  state.netRenderings = new Map()

  route.render(state, { passedTime, deltaTime })

  renderToggleUIButton(state)

  requestAnimationFrame((passedTime) => renderLoop(state, passedTime))
}
