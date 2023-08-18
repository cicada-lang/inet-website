import { ParsingError, Report, parseStmts } from "@cicada-lang/inet"
import { State } from "./State"

export async function stateReload(state: State): Promise<void> {
  delete state.errorMessage

  try {
    state.mod.stmts = parseStmts(state.text)

    for (const stmt of state.mod.stmts) {
      await stmt.execute(state.mod)
    }
  } catch (error) {
    console.error(error)

    if (error instanceof ParsingError) {
      state.errorMessage = error.report(state.text)
    } else if (error instanceof Report) {
      state.errorMessage = error.format()
    } else {
      state.errorMessage = String(error)
    }
  }
}
