import { State } from '../../State'
import { selectType } from './selectType'

export function selectFirstType(state: State): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      selectType(state, name)
      return
    }
  }
}
