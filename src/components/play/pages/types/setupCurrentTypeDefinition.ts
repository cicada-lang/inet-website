import { State } from '../../State'

export function setupCurrentTypeDefinition(state: State): undefined {
  if (state.selectedType !== undefined) {
    return
  }

  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      state.selectedType = { name }
      return
    }
  }
}
