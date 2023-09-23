import { State } from '../../State'
import { selectFunction } from './selectFunction'

export function selectFirstFunction(state: State): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'FunctionDefinition') {
      selectFunction(state, name)
      return
    }
  }
}
