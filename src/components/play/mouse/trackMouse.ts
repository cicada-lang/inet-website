import { touchEventOffset } from '../../../utils/browser/touchEventOffset'
import { State } from '../State'

export function trackMouse(state: State) {
  state.canvas.addEventListener('mousedown', (event) => {
    event.preventDefault()

    state.mouse.position = [event.offsetX, event.offsetY]
    state.mouse.isDown = true
  })

  state.canvas.addEventListener('mouseup', (event) => {
    event.preventDefault()

    state.mouse.isDown = false
  })

  state.canvas.addEventListener('mousemove', (event) => {
    event.preventDefault()

    state.mouse.position = [event.offsetX, event.offsetY]
  })

  state.canvas.addEventListener('touchstart', (event) => {
    event.preventDefault()
    event.stopPropagation()

    state.mouse.position = touchEventOffset(event)
    state.mouse.isDown = true
  })

  state.canvas.addEventListener('touchend', (event) => {
    event.preventDefault()
    event.stopPropagation()

    state.mouse.isDown = false
  })

  state.canvas.addEventListener('touchmove', (event) => {
    event.preventDefault()
    event.stopPropagation()

    state.mouse.position = touchEventOffset(event)
    state.mouse.isDown = true
  })
}
