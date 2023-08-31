import { State } from '../State'

export function listenKeyboard(state: State): void {
  state.canvas.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const route = state.history.pop()
      if (route) {
        state.currentRoute = route
      }
    }
  })
}
