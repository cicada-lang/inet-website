import { State } from '../State'

export type RenderOptions = {
  passedTime: number
  deltaTime: number
}

export type Route = {
  path: string
  render: (state: State, options: RenderOptions) => void
}
