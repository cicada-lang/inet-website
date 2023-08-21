import { Mouse } from './Mouse'

export function trackMouse(mouse: Mouse) {
  window.addEventListener('mousedown', (event) => {
    mouse.isDown = true
  })

  window.addEventListener('mouseup', (event) => {
    mouse.isDown = false
  })

  window.addEventListener('mousemove', (event) => {
    mouse.position = [event.x, event.y]
  })
}
