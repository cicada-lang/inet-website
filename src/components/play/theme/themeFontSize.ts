const fontSizeRecord: Record<string, string> = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '60px',
  '7xl': '72px',
  '8xl': '96px',
  '9xl': '128px',
}

export function themeFontSize(size: string): string {
  const found = fontSizeRecord[size]
  if (found) {
    return found
  }

  return size
}
