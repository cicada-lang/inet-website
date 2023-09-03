import { SelectedValue } from './SelectedValue'

export type HomeState = {
  selectedValue?: SelectedValue
  stackScrollCursor?: number
  stackInViewIndex?: number
  localName?: string
}
