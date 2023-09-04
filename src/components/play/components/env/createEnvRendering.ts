import { EnvRendering } from './EnvRendering'

export function createEnvRendering(options: { name: string }): EnvRendering {
  const { name } = options

  return {
    name,
    stackInViewLength: 7,
    localsInViewLength: 5,
  }
}
