import { Env } from '@cicada-lang/inet-js'
import { EnvRendering } from './EnvRendering'

export function createEnvRendering(options: {
  name: string
  env: Env
  x: number
  y: number
  width: number
  height: number
}): EnvRendering {
  const { name, env, x, y, width, height } = options

  return {
    name,
    env,
    x,
    y,
    width,
    height,
    stackInViewLength: 7,
    localsInViewLength: 5,
  }
}
