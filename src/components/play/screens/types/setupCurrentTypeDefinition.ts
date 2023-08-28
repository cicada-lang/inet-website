import { State } from '../../State'

export function setupCurrentTypeDefinition(state: State): undefined {
  state.currentRoute.properties = state.currentRoute.properties || {}
  if (state.currentRoute.properties.name === undefined) {
    for (const [name, definition] of state.mod.definitions) {
      if (definition['@kind'] === 'TypeDefinition') {
        state.currentRoute.properties.name = name
        return
      }
    }
  }
}
