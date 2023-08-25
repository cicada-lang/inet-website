import { Route } from '../route/Route'
import { renderHome } from './home/renderHome'
import { renderNodes } from './nodes/renderNodes'
import { renderTypes } from './types/renderTypes'
import { renderWords } from './words/renderWords'

export const routes: Array<Route> = [
  { path: 'home', render: renderHome },
  { path: 'types', render: renderTypes },
  { path: 'nodes', render: renderNodes },
  { path: 'words', render: renderWords },
]
