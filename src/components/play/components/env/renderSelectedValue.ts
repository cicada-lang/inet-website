import { State } from '../../State'
import { SelectedValue } from '../../components/env/SelectedValue'
import { renderSelectedNet } from './renderSelectedNet'
import { renderValue } from './renderValue'

export function renderSelectedValue(
  state: State,
  selectedValue: SelectedValue,
): void {
  if (selectedValue['@kind'] === 'SelectedValueHalfEdge') {
    renderSelectedNet(state, selectedValue.netRendering)
  } else {
    renderValue(state, selectedValue.value)
  }
}
