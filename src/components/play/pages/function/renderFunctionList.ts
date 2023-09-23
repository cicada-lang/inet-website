import { FunctionDefinition } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { renderScrollbar } from '../../components/scrollbar/renderScrollbar'
import { themeSize } from '../../theme/themeSize'
import { renderFunctionListEntry } from './renderFunctionListEntry'
import { renderFunctionListLabel } from './renderFunctionListLabel'

export function renderFunctionList(state: State): void {
  renderFunctionListLabel(state)

  const inViewLength = state.functionState.functionsInViewLength
  const height = themeSize(10)
  const marginT = height * 2

  const definitions = Array.from(state.mod.definitions.values()).filter(
    (definition): definition is FunctionDefinition =>
      definition['@kind'] === 'FunctionDefinition',
  )

  if (definitions.length > inViewLength) {
    const marginL = themeSize(10)
    const length = definitions.length
    const cursor = state.functionState.functionsScrollCursor || 0

    renderScrollbar(state, {
      name: 'functions-scrollbar',
      x: 0,
      y: marginT,
      width: marginL,
      height: height * inViewLength,
      length,
      inViewLength,
      cursor,
      onScroll: (cursor) => {
        state.functionState.functionsScrollCursor = cursor
      },
    })

    for (const [i, definition] of definitions
      .slice(cursor, cursor + inViewLength)
      .entries()) {
      renderFunctionListEntry(state, i, definition, {
        height,
        marginT,
        marginL,
      })
    }
  } else {
    for (const [i, definition] of definitions.entries()) {
      renderFunctionListEntry(state, i, definition, {
        height,
        marginT,
        marginL: 0,
      })
    }
  }
}
