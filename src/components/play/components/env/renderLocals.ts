import { State } from '../../State'
import { renderScrollbar } from '../../components/scrollbar/renderScrollbar'
import { themeSize } from '../../theme/themeSize'
import { EnvRendering } from './EnvRendering'
import { renderLocalEntry } from './renderLocalEntry'
import { renderLocalsLabel } from './renderLocalsLabel'

export function renderLocals(state: State, rendering: EnvRendering): void {
  const inViewLength = rendering.localsInViewLength
  const height = themeSize(10)

  if (rendering.env.locals.size > 0) {
    renderLocalsLabel(state, { marginT: 0 })
  }

  const marginT = height

  if (rendering.env.locals.size > inViewLength) {
    const marginL = themeSize(10)
    const length = rendering.env.locals.size
    const cursor = rendering.localsScrollCursor || 0

    renderScrollbar(state, {
      name: `${rendering.name}/locals-scrollbar`,
      x: 0,
      y: marginT,
      width: marginL,
      height: height * inViewLength,
      length,
      inViewLength,
      cursor,
      onScroll: (cursor) => {
        rendering.localsScrollCursor = cursor
      },
    })

    const localEntries = Array.from(rendering.env.locals.entries()).slice(
      cursor,
      cursor + inViewLength,
    )

    for (const [i, [name, value]] of localEntries.entries()) {
      renderLocalEntry(state, rendering, i, name, value, {
        height,
        marginT,
        marginL,
      })
    }
  } else {
    const localEntries = Array.from(rendering.env.locals.entries())

    for (const [i, [name, value]] of localEntries.entries()) {
      renderLocalEntry(state, rendering, i, name, value, {
        height,
        marginT,
        marginL: 0,
      })
    }
  }
}
