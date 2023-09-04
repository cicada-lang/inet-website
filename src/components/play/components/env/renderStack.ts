import { State } from '../../State'
import { renderScrollbar } from '../../components/scrollbar/renderScrollbar'
import { themeSize } from '../../theme/themeSize'
import { EnvRendering } from './EnvRendering'
import { renderStackEntry } from './renderStackEntry'
import { renderStackLabel } from './renderStackLabel'

export function renderStack(state: State, rendering: EnvRendering): void {
  const height = themeSize(10)

  const inViewLength = rendering.stackInViewLength

  if (rendering.env.stack.length > 0) {
    renderStackLabel(
      state,
      Math.min(rendering.env.stack.length, inViewLength),
      {
        height,
      },
    )
  }

  if (rendering.env.stack.length > inViewLength) {
    const marginL = themeSize(10)
    const length = rendering.env.stack.length
    const cursor = rendering.stackScrollCursor || 0

    renderScrollbar(state, {
      name: `${rendering.name}/stack-scrollbar`,
      x: 0,
      y: state.height - height * inViewLength,
      width: marginL,
      height: height * inViewLength,
      length,
      inViewLength,
      cursor,
      onScroll: (cursor) => {
        rendering.stackScrollCursor = cursor
      },
    })

    const stack = rendering.env.stack.slice(
      length - inViewLength - cursor,
      length - cursor,
    )

    for (const [i, value] of stack.entries()) {
      renderStackEntry(state, rendering, i, value, { height, marginL })
    }
  } else {
    for (const [i, value] of rendering.env.stack.entries()) {
      renderStackEntry(state, rendering, i, value, { height, marginL: 0 })
    }
  }
}
