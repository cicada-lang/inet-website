import { State } from '../../State'
import { SelectedValue } from './SelectedValue'
import { renderSelectedNet } from './renderSelectedNet'
import { renderValue } from './renderValue'

export function renderSelectedValue(
  state: State,
  selectedValue: SelectedValue,
): void {
  if (selectedValue['@kind'] === 'SelectedValuePort') {
    renderSelectedNet(state, selectedValue.port, selectedValue.netRendering)
  } else {
    renderValue(state, selectedValue.value)
  }
}
