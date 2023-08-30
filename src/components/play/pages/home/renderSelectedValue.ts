import { State } from '../../State'
import { renderNet } from '../../net/renderNet'
import { SelectedValue } from './SelectedValue'
import { renderValue } from './renderValue'

export function renderSelectedValue(
  state: State,
  selectedValue: SelectedValue,
): void {
  if (selectedValue['@kind'] === 'SelectedValuePort') {
    renderNet(state, selectedValue.netRendering)
  } else {
    renderValue(state, selectedValue.value)
  }
}
