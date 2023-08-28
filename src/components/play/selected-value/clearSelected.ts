import { State } from '../State'

export function clearSelected(state: State): void {
  state.selectedValue = undefined
  state.selectedStackIndex = undefined
  state.selectedLocalName = undefined
}
