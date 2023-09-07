import { State } from '../State'
import { handleClick } from './handleClick'

export function trackMouse(state: State) {
  state.canvas.addEventListener('click', (event) => {
    event.preventDefault()

    state.mouse.position = [event.offsetX, event.offsetY]

    state.mouse.ctrlKey = event.ctrlKey
    state.mouse.altKey = event.altKey

    handleClick(state)
  })

  state.canvas.addEventListener('mousemove', (event) => {
    event.preventDefault()

    state.mouse.position = [event.offsetX, event.offsetY]

    state.mouse.ctrlKey = event.ctrlKey
    state.mouse.altKey = event.altKey
  })
}
