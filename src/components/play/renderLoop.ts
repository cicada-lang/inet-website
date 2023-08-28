import { State } from './State'
import { renderButtonHideUI } from './hide-ui/renderButtonHideUI'
import { renderButtonShowUI } from './hide-ui/renderButtonShowUI'
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

  if (state.isHidingUI) {
    renderButtonShowUI(state)
  } else {
    renderButtonHideUI(state)
  }

  handleClick(state, { deltaTime })

  requestAnimationFrame((passedTime) => renderLoop(state, passedTime))
}
