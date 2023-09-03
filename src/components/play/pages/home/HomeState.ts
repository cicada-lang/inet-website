import { SelectedValue } from './SelectedValue'

export type HomeState = {
  selectedValue?: SelectedValue
  stackInViewLength: number
  stackScrollCursor?: number
  stackInViewIndex?: number
  localName?: string
  localsInViewLength: number
  localsScrollCursor?: number
}
