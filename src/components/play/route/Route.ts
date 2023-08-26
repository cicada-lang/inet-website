import { State } from '../State'

export type RenderOptions = {
  passedTime: number
  deltaTime: number
}

export type RouteExp = {
  name: string
  properties?: Record<string, string>
}

export type Route = RouteExp & {
  render: (state: State, options: RenderOptions) => void
}
