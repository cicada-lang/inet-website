import { State } from '../../State'

export type ClickableRect = {
  name: string
  x: number
  y: number
  height: number
  width: number
  withBorder?: boolean
  onClick: (state: State, event: MouseEvent) => void
  isDisabled?: (state: State) => void
  onMousemove?: (state: State, event: MouseEvent) => void
  onTouchmove?: (state: State, event: TouchEvent) => void
}
