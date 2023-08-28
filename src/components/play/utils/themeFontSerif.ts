import { State } from '../State'
import { FontSize } from './FontSize'
import { formatFontSize } from './formatFontSize'

export function themeFontSerif(state: State, size: FontSize): void {
  const sizeText = formatFontSize(state, size)
  state.ctx.font = `${sizeText} serif`
}
