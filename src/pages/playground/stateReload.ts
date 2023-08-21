import { ParsingError, Report, createMod, parseStmts } from '@cicada-lang/inet'
import { State } from './State'

export async function stateReload(state: State): Promise<void> {
  state.errorMessage = ''
  state.output = ''

  state.mod.loader.onOutput = (output) => {
    state.output += output
    state.output += '\n'
  }

  state.mod = createMod({
    loader: state.mod.loader,
    url: state.mod.url,
    text: state.text,
    stmts: [],
  })

  try {
    state.mod.stmts = parseStmts(state.text)

    for (const stmt of state.mod.stmts) {
      await stmt.execute(state.mod)
    }

    // NOTE After async execution, update `tick`
    // for `Play` component to refresh state.
    state.tick++
  } catch (error) {
    if (error instanceof ParsingError) {
      state.errorMessage = error.report(state.text)
    } else if (error instanceof Report) {
      state.errorMessage = error.format()
    } else {
      state.errorMessage = String(error)
    }
  }
}
