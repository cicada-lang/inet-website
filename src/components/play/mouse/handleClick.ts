import { State } from '../State'
import { onClick } from '../mouse/onClick'

export function handleClick(
  state: State,
  options: { deltaTime: number },
): void {
  const clickPeriod = 120
  if (state.clickCoollingTimer <= 0) {
    if (state.mouse.isDown) {
      onClick(state)
      state.clickCoollingTimer = clickPeriod
    }
  } else {
    state.clickCoollingTimer -= options.deltaTime
  }
}
