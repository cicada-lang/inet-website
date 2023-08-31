import { fontSize } from './fontSize'

export function themeFontSerif(size: string): string {
  const sizeText = fontSize(size)
  return `${sizeText} serif`
}
