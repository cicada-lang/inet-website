import { State } from '../../State'
import { Rect } from '../rect/Rect'

export type Button = {
  name: string
  text: string
  x: number
  y: number
  height: number
  rect: Rect
  align?: 'left' | 'right'
  noBorder?: boolean
  handler: (state: State) => void
  isActive?: (state: State) => void
  isDisabled?: (state: State) => void
}
