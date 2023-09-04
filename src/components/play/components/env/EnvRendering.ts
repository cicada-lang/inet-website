import { SelectedValue } from '../../pages/home/SelectedValue'

export type EnvRendering = {
  selectedValue?: SelectedValue
  stackInViewLength: number
  stackScrollCursor?: number
  stackInViewIndex?: number
  localName?: string
  localsInViewLength: number
  localsScrollCursor?: number
}
