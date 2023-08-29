import { State } from '../../State'

export function setupCurrentNodeDefinition(state: State): undefined {
  state.currentRoute.properties = state.currentRoute.properties || {}
  if (state.currentRoute.properties.name === undefined) {
    for (const [name, definition] of state.mod.definitions) {
      if (definition['@kind'] === 'NodeDefinition') {
        state.currentRoute.properties.name = name
        return
      }
    }
  }
}
