import { formatFontSize } from './formatFontSize'

export default function themeFontMono(size: string): string {
  const sizeText = formatFontSize(size)
  return `${sizeText} monospace`
}
