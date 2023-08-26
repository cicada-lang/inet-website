import { State } from '../../State'
import { renderButton } from '../../button/renderButton'

export function renderTypeDefinitionList(state: State): void {
  state.ctx.save()

  const marginT = 80

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      const height = 34

      renderButton(state, name, 0, marginT + height * i, {
        name: `types/${name}`,
        height,
        paddingX: 10,
        withBorder: true,
        font: state.breakpoints.md ? '18px sans-serif' : '16px sans-serif',
        isActive: () => false,
        activeUnderline: { offset: 8, width: 1.5 },
        handler: () => {
          console.log(`types/${name}`)
        },
      })

      i++
    }
  }

  state.ctx.restore()
}
