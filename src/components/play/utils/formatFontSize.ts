import { State } from '../State'
import { FontSize } from './FontSize'

export function formatFontSize(state: State, size: FontSize): string {
  if (state.breakpoints.md) {
    switch (size) {
      case 'sm':
        return '16px'
      case 'base':
        return '18px'
    }
  } else {
    switch (size) {
      case 'sm':
        return '14px'
      case 'base':
        return '16px'
    }
  }
}
