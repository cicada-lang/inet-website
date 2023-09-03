import { State } from './State'
import { renderButton } from './components/button/renderButton'
import { renderClickableRect } from './components/rect/renderClickableRect'
import { renderToggleUIButton } from './hide-ui/renderToggleUIButton'
import { handleClickWithThrottle } from './mouse/handleClickWithThrottle'
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

  route.render(state, { passedTime, deltaTime })
  renderToggleUIButton(state)

  for (const button of state.buttons.values()) {
    renderButton(state, button)
  }

  for (const clickableRect of state.clickableRects.values()) {
    renderClickableRect(state, clickableRect)
  }

  handleClickWithThrottle(state, { deltaTime })

  requestAnimationFrame((passedTime) => renderLoop(state, passedTime))
}
