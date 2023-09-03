import { State } from '../../State'
import { Rect } from './Rect'

export type ClickableRect = {
  name: string
  x: number
  y: number
  height: number
  width: number
  noBorder?: boolean
  handler: (state: State) => void
  isDisabled?: (state: State) => void
  rect: Rect
}
