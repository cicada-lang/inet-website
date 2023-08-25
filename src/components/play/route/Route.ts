import { State } from '../State'

export type Route = {
  path: string
  render: (state: State) => void
}
