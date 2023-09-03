import { Route } from '../route/Route'
import { renderHomePage } from './home/renderHomePage'
import { renderNodePage } from './node/renderNodePage'
import { renderTypePage } from './type/renderTypePage'
import { renderWordPage } from './word/renderWordPage'

export const routes: Array<Route> = [
  { name: 'home', render: renderHomePage },
  { name: 'type', render: renderTypePage },
  { name: 'node', render: renderNodePage },
  { name: 'word', render: renderWordPage },
]
