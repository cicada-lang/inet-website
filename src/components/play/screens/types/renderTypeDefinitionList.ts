import { State } from '../../State'

export function renderTypeDefinitionList(state: State): void {
  state.ctx.save()

  const marginL = 10
  const marginT = 80
  state.ctx.translate(marginL, marginT)

  const height = 34

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      state.ctx.font = state.breakpoints.md
        ? '18px sans-serif'
        : '16px sans-serif'
      state.ctx.fillText(name, 0, height * i)
      i++
    }
  }

  state.ctx.restore()
}
