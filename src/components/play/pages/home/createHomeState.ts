import { createEnvRendering } from '../../components/env/createEnvRendering'
import { HomeState } from './HomeState'

export function createHomeState(): HomeState {
  return {
    envRendering: createEnvRendering(),
  }
}
