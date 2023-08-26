import { Route } from '../route/Route'
import { renderHome } from './home/renderHome'
import { renderNodes } from './nodes/renderNodes'
import { renderTypes } from './types/renderTypes'
import { renderWords } from './words/renderWords'

export const routes: Array<Route> = [
  { name: 'home', render: renderHome },
  { name: 'types', render: renderTypes },
  { name: 'nodes', render: renderNodes },
  { name: 'words', render: renderWords },
]
