import { Value } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import themeFontMono from '../../theme/themeFontMono'
import { createSelectedValue } from './createSelectedValue'

export function renderLocalVariableEntry(
  state: State,
  i: number,
  name: string,
  value: Value,
): void {
  const height = 34
  const paddingX = 10
  const marginT = height + 15

  const x = 0
  const y = 0 + height * i + marginT

  state.ctx.font = state.breakpoints.md
    ? themeFontMono('base')
    : themeFontMono('sm')

  renderButton(state, '$' + name, x, y, {
    name: `locals.${name}`,
    height,
    paddingX,
    isDisabled: (state) => name === state.selectedValue?.localName,
    isActive: (state) => name === state.selectedValue?.localName,
    activeUnderline: { offset: 5, width: 1.5 },
    handler: (state) => {
      state.selectedValue = createSelectedValue(state, value)
      state.selectedValue.localName = name
    },
  })
}
