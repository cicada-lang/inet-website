import { State } from '../State'
import { FontSize } from './FontSize'
import { formatFontSize } from './formatFontSize'

export default function themeFontMono(state: State, size: FontSize): void {
  const sizeText = formatFontSize(state, size)
  state.ctx.font = `${sizeText} monospace`
}
