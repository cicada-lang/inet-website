import { useMediaQuery } from '@vueuse/core'
import { reactive } from 'vue'

// https://tailwindcss.com/docs/responsive-design

export type Breakpoints = {
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
  '2xl': boolean
}

export function useBreakpoints(): Breakpoints {
  return reactive({
    sm: useMediaQuery('(min-width: 640px)'),
    md: useMediaQuery('(min-width: 768px)'),
    lg: useMediaQuery('(min-width: 1024px)'),
    xl: useMediaQuery('(min-width: 1280px)'),
    '2xl': useMediaQuery('(min-width: 1536px)'),
  })
}
