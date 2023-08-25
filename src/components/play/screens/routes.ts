import { Route } from '../route/Route'
import { renderHome } from './home/renderHome'

export const routes: Array<Route> = [
  {
    path: 'main',
    render: renderHome,
  },
]
