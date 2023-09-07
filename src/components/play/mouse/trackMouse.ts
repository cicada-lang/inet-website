import { State } from '../State'
import { handleClick } from './handleClick'
import { handleMousemove } from './handleMousemove'

export function trackMouse(state: State) {
  state.canvas.addEventListener('click', (event) => {
    event.preventDefault()
    state.mouse.position = [event.offsetX, event.offsetY]
    handleClick(state, event)
  })

  state.canvas.addEventListener('mousedown', (event) => {
    event.preventDefault()
    state.mouse.position = [event.offsetX, event.offsetY]
    state.mouse.isDown = true
  })

  state.canvas.addEventListener('mouseup', (event) => {
    event.preventDefault()
    state.mouse.position = [event.offsetX, event.offsetY]
    state.mouse.isDown = false
  })

  state.canvas.addEventListener('mousemove', (event) => {
    event.preventDefault()
    state.mouse.position = [event.offsetX, event.offsetY]
    handleMousemove(state, event)
  })
}
