import { State } from '../State'
import { Route } from './Route'

export function findRoute(state: State): Route | undefined {
  const route = state.routes.find((route) => route.path === state.path)
  return route
}
