import { touchEventOffset } from '../../../utils/browser/touchEventOffset'
import { State } from '../State'

export function trackMouse(state: State) {
  state.canvas.addEventListener('mousedown', (event) => {
    event.preventDefault()

    state.mouse.position = [event.offsetX, event.offsetY]

    state.mouse.isDown = true

    state.mouse.ctrlKey = event.ctrlKey
    state.mouse.altKey = event.altKey
  })

  state.canvas.addEventListener('mouseup', (event) => {
    event.preventDefault()

    state.mouse.isDown = false

    state.mouse.ctrlKey = event.ctrlKey
    state.mouse.altKey = event.altKey
  })

  state.canvas.addEventListener('mousemove', (event) => {
    event.preventDefault()

    state.mouse.position = [event.offsetX, event.offsetY]

    state.mouse.ctrlKey = event.ctrlKey
    state.mouse.altKey = event.altKey
  })

  state.canvas.addEventListener('touchstart', (event) => {
    state.mouse.position = touchEventOffset(event)
    state.mouse.isDown = true
  })

  state.canvas.addEventListener('touchend', (event) => {
    state.mouse.isDown = false
  })

  state.canvas.addEventListener('touchmove', (event) => {
    state.mouse.position = touchEventOffset(event)
    state.mouse.isDown = true
  })
}
