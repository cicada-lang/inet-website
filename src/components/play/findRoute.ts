import { State } from './State'
import { Route } from './route/Route'

export function findRoute(state: State): Route | undefined {
  const route = state.routes.find((route) => route.path === state.path)
  return route
}
