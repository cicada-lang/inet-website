import { State } from '../../State'

export function setupCurrentWordDefinition(state: State): undefined {
  state.currentRoute.properties = state.currentRoute.properties || {}
  if (state.currentRoute.properties.name === undefined) {
    for (const [name, definition] of state.mod.definitions) {
      if (definition['@kind'] === 'WordDefinition') {
        state.currentRoute.properties.name = name
        return
      }
    }
  }
}
