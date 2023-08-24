import { State } from './State'
import { onClick } from './mouse/onClick'
import { evolveNet } from './net/evolveNet'
import { renderSelectedValue } from './selected-value/renderSelectedValue'
import { renderStack } from './stack/renderStack'

export function render(state: State, passedTime?: number): void {
  passedTime = passedTime || 0
  const deltaTime = passedTime - state.lastTime
  state.lastTime = passedTime

  state.ctx.clearRect(0, 0, state.width, state.height)

  renderStack(state)

  if (state.selectedValue) {
    renderSelectedValue(state, state.selectedValue)
    if (state.selectedValue['@kind'] === 'SelectedValuePort') {
      evolveNet(state, state.selectedValue)
    }
  }

  const clickPeriod = 120
  if (state.mouse.isDown && state.clickCoollingTimer <= 0) {
    onClick(state)
    state.clickCoollingTimer = clickPeriod
  } else if (state.clickCoollingTimer > 0) {
    state.clickCoollingTimer -= deltaTime
  }

  requestAnimationFrame((passedTime) => render(state, passedTime))
}
