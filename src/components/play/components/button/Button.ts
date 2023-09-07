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
  onClick: (state: State, event: MouseEvent) => void
  isActive?: (state: State) => void
  isDisabled?: (state: State) => void
  onMousemove?: (state: State, event: MouseEvent) => void
  onTouchmove?: (state: State, event: TouchEvent) => void
}
