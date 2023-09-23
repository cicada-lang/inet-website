import { ParsingError, Report } from '@cicada-lang/inet-js'
import { State } from './State'

export async function stateReload(state: State): Promise<void> {
  state.errorMessage = ''
  state.output = ''

  state.mod.loader.onOutput = (output) => {
    state.output += output
    state.output += '\n'
  }

  try {
    state.mod.loader.loaded.delete(state.mod.url.href)
    state.mod = await state.mod.loader.load(state.mod.url, {
      text: state.text,
    })

    // NOTE After async execution, update `tick`
    // for `Play` component to refresh state.
    state.tick++
  } catch (error) {
    state.kind = 'Error'

    if (error instanceof ParsingError) {
      state.errorMessage = error.report(state.text)
    } else if (error instanceof Report) {
      state.errorMessage = error.format()
    } else {
      state.errorMessage = String(error)
    }
  }
}
