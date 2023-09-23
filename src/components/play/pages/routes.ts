import { Route } from '../route/Route'
import { renderFunctionPage } from './function/renderFunctionPage'
import { renderHomePage } from './home/renderHomePage'
import { renderNodePage } from './node/renderNodePage'
import { renderTypePage } from './type/renderTypePage'

export const routes: Array<Route> = [
  { name: 'home', render: renderHomePage },
  { name: 'type', render: renderTypePage },
  { name: 'node', render: renderNodePage },
  { name: 'function', render: renderFunctionPage },
]
