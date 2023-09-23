import { Env } from '@cicada-lang/inet-js'
import { createEnvRendering } from '../../components/env/createEnvRendering'
import { maybeSelectTopValue } from '../../components/env/maybeSelectTopValue'
import { HomeState } from './HomeState'

export function createHomeState(options: {
  env: Env
  x: number
  y: number
  width: number
  height: number
}): HomeState {
  const { env, x, y, width, height } = options

  const envRendering = createEnvRendering({
    name: 'home-env',
    env,
    x,
    y,
    width,
    height,
  })

  maybeSelectTopValue(envRendering)

  return {
    envRendering,
  }
}
