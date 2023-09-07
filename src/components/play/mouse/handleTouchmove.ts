import { State } from '../State'
import { withinRect } from '../components/rect/withinRect'

export function handleTouchmove(state: State, event: TouchEvent): void {
  for (const button of state.buttons.values()) {
    if (withinRect(button.rect, state.mouse.position)) {
      button.onTouchmove?.(state, event)
    }
  }

  for (const clickableRect of state.clickableRects.values()) {
    const { x, y, width, height } = clickableRect
    if (withinRect([x, y, width, height], state.mouse.position)) {
      clickableRect.onTouchmove?.(state, event)
    }
  }
}
