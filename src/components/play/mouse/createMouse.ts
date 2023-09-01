import { Mouse } from './Mouse'

export function createMouse(options: { width: number; height: number }): Mouse {
  return {
    position: [Infinity, Infinity],
    isDown: false,
  }
}
