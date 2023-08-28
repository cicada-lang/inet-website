import { formatFontSize } from './formatFontSize'

export function themeFontSans(size: string): string {
  const sizeText = formatFontSize(size)
  return `${sizeText} sans-serif`
}
