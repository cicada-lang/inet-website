import { Env } from '@cicada-lang/inet'
import { createEnvRendering } from '../../components/env/createEnvRendering'
import { HomeState } from './HomeState'

export function createHomeState(options: {
  env: Env
  x: number
  y: number
  width: number
  height: number
}): HomeState {
  const { env, x, y, width, height } = options

  return {
    envRendering: createEnvRendering({
      name: 'home-env',
      env,
      x,
      y,
      width,
      height,
    }),
  }
}
