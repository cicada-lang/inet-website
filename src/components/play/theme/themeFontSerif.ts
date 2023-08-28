import { formatFontSize } from './formatFontSize'

export function themeFontSerif(size: string): string {
  const sizeText = formatFontSize(size)
  return `${sizeText} serif`
}
