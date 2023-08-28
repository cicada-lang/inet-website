import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { themeFontSans } from '../../theme/themeFontSans'

export function renderNodeList(state: State): void {
  state.ctx.save()

  const height = 34
  const marginT = height + 15

  state.ctx.font = state.breakpoints.md
    ? themeFontSans('lg')
    : themeFontSans('base')

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'NodeDefinition') {
      const height = 34

      renderButton(state, name, 0, marginT + height * i, {
        name: `nodes/${name}`,
        height,
        paddingX: 10,
        isActive: (state) => state.currentRoute.properties?.name === name,
        activeUnderline: { offset: 8, width: 1.5 },
        handler: (state) => {
          state.currentRoute.properties = state.currentRoute.properties || {}
          state.currentRoute.properties.name = name
        },
      })

      i++
    }
  }

  state.ctx.restore()
}
