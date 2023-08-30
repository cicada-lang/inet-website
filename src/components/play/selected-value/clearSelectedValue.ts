import { State } from '../State'

export function clearSelectedValue(state: State): void {
  state.selectedValue = undefined
  state.selectedStackIndex = undefined
  state.selectedLocalName = undefined
}
