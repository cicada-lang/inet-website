import { WordDefinition } from '@cicada-lang/inet-cute'
import { State } from '../../State'
import { renderScrollbar } from '../../components/scrollbar/renderScrollbar'
import { themeSize } from '../../theme/themeSize'
import { renderWordListEntry } from './renderWordListEntry'
import { renderWordListLabel } from './renderWordListLabel'

export function renderWordList(state: State): void {
  renderWordListLabel(state)

  const inViewLength = state.wordState.wordsInViewLength
  const height = themeSize(10)
  const marginT = height * 2

  const definitions = Array.from(state.mod.definitions.values()).filter(
    (definition): definition is WordDefinition =>
      definition['@kind'] === 'WordDefinition',
  )

  if (definitions.length > inViewLength) {
    const marginL = themeSize(10)
    const length = definitions.length
    const cursor = state.wordState.wordsScrollCursor || 0

    renderScrollbar(state, {
      name: 'words-scrollbar',
      x: 0,
      y: marginT,
      width: marginL,
      height: height * inViewLength,
      length,
      inViewLength,
      cursor,
      onScroll: (cursor) => {
        state.wordState.wordsScrollCursor = cursor
      },
    })

    for (const [i, definition] of definitions
      .slice(cursor, cursor + inViewLength)
      .entries()) {
      renderWordListEntry(state, i, definition, {
        height,
        marginT,
        marginL,
      })
    }
  } else {
    for (const [i, definition] of definitions.entries()) {
      renderWordListEntry(state, i, definition, {
        height,
        marginT,
        marginL: 0,
      })
    }
  }
}
