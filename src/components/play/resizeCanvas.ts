import { State } from './State'

export function resizeCanvas(state: State) {
  resizeCanvasOnce(state)

  new ResizeObserver(() => resizeCanvasOnce(state)).observe(state.container)
}

function resizeCanvasOnce(state: State) {
  const width = state.container.offsetWidth
  const height = state.container.offsetHeight

  // Resize canvas element.

  state.canvas.style.width = width + 'px'
  state.canvas.style.height = height + 'px'

  // Adjust canvas resolution by `window.devicePixelRatio`.

  const ratio = window.devicePixelRatio || 1

  state.canvas.width = width * ratio
  state.canvas.height = height * ratio

  state.ctx.scale(ratio, ratio)

  // After the adjustment, the canvas size is no longer the DOM size,
  // but we need DOM size, because it is used by DOM event like
  // `mousemove` and `touchmove`, so we define our own size.

  state.width = width
  state.height = height
}
