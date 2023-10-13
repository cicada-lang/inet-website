import { reactive } from 'vue'
import { State } from './State'
import { StateOptions, stateLoad } from './stateLoad'

let cache: State | undefined = undefined

export async function stateLoadReactive(options: StateOptions): Promise<State> {
  if (cache) return cache

  const state = reactive(await stateLoad(options))
  cache = state
  return state
}
