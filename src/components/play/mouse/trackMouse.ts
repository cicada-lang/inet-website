import { State } from '../State'

export function trackMouse(state: State) {
  state.canvas.addEventListener('mousedown', (event) => {
    state.mouse.isDown = true
  })

  state.canvas.addEventListener('mouseup', (event) => {
    state.mouse.isDown = false
  })

  state.canvas.addEventListener('mousemove', (event) => {
    state.mouse.position = [event.offsetX, event.offsetY]
  })
}
