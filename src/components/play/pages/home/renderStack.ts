import { State } from '../../State'
import { renderScrollbar } from '../../components/scrollbar/renderScrollbar'
import { themeSize } from '../../theme/themeSize'
import { renderStackEntry } from './renderStackEntry'
import { renderStackLabel } from './renderStackLabel'

export function renderStack(state: State): void {
  const height = themeSize(10)

  const inViewLength = state.homeState.stackInViewLength

  if (state.mod.env.stack.length > 0) {
    renderStackLabel(
      state,
      Math.min(state.mod.env.stack.length, inViewLength),
      {
        height,
      },
    )
  }

  if (state.mod.env.stack.length > inViewLength) {
    const marginL = themeSize(10)
    const length = state.mod.env.stack.length
    const cursor = state.homeState.stackScrollCursor || 0

    renderScrollbar(state, {
      name: 'stack-scrollbar',
      x: 0,
      y: state.height - height * inViewLength,
      width: marginL,
      height: height * inViewLength,
      length,
      inViewLength,
      cursor,
      onScroll: (cursor) => {
        state.homeState.stackScrollCursor = cursor
      },
    })

    const stack = state.mod.env.stack.slice(
      length - inViewLength - cursor,
      length - cursor,
    )

    for (const [i, value] of stack.entries()) {
      renderStackEntry(state, i, value, { height, marginL })
    }
  } else {
    for (const [i, value] of state.mod.env.stack.entries()) {
      renderStackEntry(state, i, value, { height, marginL: 0 })
    }
  }
}
