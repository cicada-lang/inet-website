import { State } from '../State'
import { FontSize } from './FontSize'
import { formatFontSize } from './formatFontSize'

export function themeFontSans(state: State, size: FontSize): void {
  const sizeText = formatFontSize(state, size)
  state.ctx.font = `${sizeText} sans-serif`
}
