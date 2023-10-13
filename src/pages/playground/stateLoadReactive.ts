import { State } from './State'
import { StateOptions, stateLoad } from './stateLoad'
import { stateReactive } from './stateReactive'

let cache: State | undefined = undefined

export async function stateLoadReactive(options: StateOptions): Promise<State> {
  if (cache) {
    return cache
  }

  const state = stateReactive(await stateLoad(options))

  cache = state

  return state
}
