import { Fetcher, Loader } from '@cicada-lang/inet-js'
import { State } from './State'
import { stateReload } from './stateReload'

export type StateOptions = {
  text: string
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const { text } = options

  const fetcher = new Fetcher()
  const loader = new Loader({ fetcher })
  const url = new URL(window.location.href)

  const mod = await loader.load(url, { text: '' })

  const state: State = {
    kind: 'Play',
    text,
    mod,
    output: '',
    errorMessage: '',
    tick: 0,
  }

  await stateReload(state)

  return state
}
