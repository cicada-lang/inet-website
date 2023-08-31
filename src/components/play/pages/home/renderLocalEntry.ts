import { Value } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { createSelectedValue } from './createSelectedValue'

export function renderLocalEntry(
  state: State,
  i: number,
  name: string,
  value: Value,
): void {
  const height = themeSize(10)
  const marginT = height * 2 + themeSize(4)

  const x = 0
  const y = 0 + height * i + marginT

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, '$' + name, x, y, {
    name: `locals.${name}`,
    height,
    isDisabled: (state) => name === state.selectedValue?.localName,
    isActive: (state) => name === state.selectedValue?.localName,
    handler: (state) => {
      state.selectedValue = createSelectedValue(state, value)
      state.selectedValue.localName = name
    },
  })
}
