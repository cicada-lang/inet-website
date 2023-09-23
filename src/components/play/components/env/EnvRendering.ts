import { Env } from '@cicada-lang/inet-js'
import { SelectedValue } from './SelectedValue'

export type EnvRendering = {
  name: string
  env: Env
  x: number
  y: number
  width: number
  height: number
  selectedValue?: SelectedValue
  stackInViewLength: number
  stackScrollCursor?: number
  stackInViewIndex?: number
  localName?: string
  localsInViewLength: number
  localsScrollCursor?: number
}
