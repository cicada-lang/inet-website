import { EnvRendering } from './EnvRendering'
import { createSelectedValue } from './createSelectedValue'

export function maybeSelectTopValue(rendering: EnvRendering): void {
  const value = rendering.env.stack[rendering.env.stack.length - 1]
  if (value) {
    rendering.selectedValue = createSelectedValue(rendering, value)
    rendering.stackInViewIndex = Math.min(
      rendering.stackInViewLength - 1,
      rendering.env.stack.length - 1,
    )
  }
}
