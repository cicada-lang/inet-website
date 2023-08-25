import { Route } from '../route/Route'
import { renderHome } from './home/renderHome'
import { renderNodeDefinitions } from './nodes/renderNodeDefinitions'
import { renderTypeDefinitions } from './types/renderTypeDefinitions'
import { renderWordDefinitions } from './words/renderWordDefinitions'

export const routes: Array<Route> = [
  { path: 'home', render: renderHome },
  { path: 'types', render: renderTypeDefinitions },
  { path: 'nodes', render: renderNodeDefinitions },
  { path: 'words', render: renderWordDefinitions },
]
