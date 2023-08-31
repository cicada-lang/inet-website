import { fontSize } from './fontSize'

export function themeFontSans(size: string): string {
  const sizeText = fontSize(size)
  return `${sizeText} sans-serif`
}
