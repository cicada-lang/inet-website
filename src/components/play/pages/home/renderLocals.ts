import { State } from '../../State'
import { renderScrollbar } from '../../components/scrollbar/renderScrollbar'
import { themeSize } from '../../theme/themeSize'
import { renderLocalEntry } from './renderLocalEntry'
import { renderLocalsLabel } from './renderLocalsLabel'

export function renderLocals(state: State): void {
  const inViewLength = state.homeState.localsInViewLength
  const height = themeSize(10)

  if (state.mod.env.locals.size > 0) {
    renderLocalsLabel(state, { marginT: 0 })
  }

  const marginT = height

  if (state.mod.env.locals.size > inViewLength) {
    const marginL = themeSize(10)
    const length = state.mod.env.locals.size
    const cursor = state.homeState.localsScrollCursor || 0

    renderScrollbar(state, {
      name: 'locals-scrollbar',
      x: 0,
      y: marginT,
      width: marginL,
      height: height * inViewLength,
      length,
      inViewLength,
      cursor,
      onScroll: (cursor) => {
        state.homeState.localsScrollCursor = cursor
      },
    })

    const localEntries = Array.from(state.mod.env.locals.entries()).slice(
      cursor,
      cursor + inViewLength,
    )

    for (const [i, [name, value]] of localEntries.entries()) {
      renderLocalEntry(state, i, name, value, { height, marginL, marginT })
    }
  } else {
    const localEntries = Array.from(state.mod.env.locals.entries())

    for (const [i, [name, value]] of localEntries.entries()) {
      renderLocalEntry(state, i, name, value, { height, marginL: 0, marginT })
    }
  }
}
