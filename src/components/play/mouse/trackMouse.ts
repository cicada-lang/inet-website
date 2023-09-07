import { State } from '../State'
import { handleClick } from './handleClick'

export function trackMouse(state: State) {
  state.canvas.addEventListener('click', (event) => {
    event.preventDefault()

    state.mouse.position = [event.offsetX, event.offsetY]

    handleClick(state, event)
  })

  state.canvas.addEventListener('mousemove', (event) => {
    event.preventDefault()

    state.mouse.position = [event.offsetX, event.offsetY]
  })
}
