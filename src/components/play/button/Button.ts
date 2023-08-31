import { State } from '../State'
import { Rect } from '../rect/Rect'

export type Button = {
  rect: Rect
  handler: (state: State) => void
}
