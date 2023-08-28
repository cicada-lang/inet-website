import { Value } from '@cicada-lang/inet'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { createSelectedValue } from '../selected-value/createSelectedValue'
import themeFontMono from '../theme/themeFontMono'

export function renderLocalVariableEntry(
  state: State,
  i: number,
  name: string,
  value: Value,
): void {
  const paddingX = 10
  const marginT = 5
  const height = 34
  const x = 0
  const y = 0 + height * i + marginT

  state.ctx.font = state.breakpoints.md
    ? themeFontMono('base')
    : themeFontMono('sm')

  renderButton(state, '$' + name, x, y, {
    name: `locals.${name}`,
    height,
    paddingX,
    isActive: () => name === state.selectedLocalName,
    activeUnderline: { offset: 5, width: 1.5 },
    handler: (state) => {
      state.selectedValue = createSelectedValue(state, value)
      state.selectedLocalName = name
    },
  })
}
