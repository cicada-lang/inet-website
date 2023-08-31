import { State } from '../State'

export function trackMouse(state: State) {
  state.canvas.addEventListener('mousedown', (event) => {
    event.preventDefault()

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

    const offsetX =
      event.touches[0].pageX - (event.touches[0].target as any).offsetLeft
    const offsetY =
      event.touches[0].pageY - (event.touches[0].target as any).offsetTop

    state.mouse.position = [offsetX, offsetY]
    state.mouse.isDown = true
  })

  state.canvas.addEventListener('touchend', (event) => {
    event.preventDefault()

    state.mouse.isDown = false
  })

  state.canvas.addEventListener('touchmove', (event: TouchEvent) => {
    event.preventDefault()

    const offsetX =
      event.touches[0].pageX - (event.touches[0].target as any).offsetLeft
    const offsetY =
      event.touches[0].pageY - (event.touches[0].target as any).offsetTop

    state.mouse.position = [offsetX, offsetY]
    state.mouse.isDown = true
  })
}
