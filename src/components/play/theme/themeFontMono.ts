import { fontSize } from './fontSize'

export default function themeFontMono(size: string): string {
  const sizeText = fontSize(size)
  return `${sizeText} monospace`
}
