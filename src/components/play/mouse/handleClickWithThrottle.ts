import { State } from '../State'
import { handleClick } from './handleClick'

export function handleClickWithThrottle(
  state: State,
  options: { deltaTime: number },
): void {
  const clickPeriod = 120
  if (state.clickCoollingTimer <= 0) {
    if (state.mouse.isDown) {
      handleClick(state)
      state.clickCoollingTimer = clickPeriod
    }
  } else {
    state.clickCoollingTimer -= options.deltaTime
  }
}
