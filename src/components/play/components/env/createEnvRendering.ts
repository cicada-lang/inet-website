import { EnvRendering } from './EnvRendering'

export function createEnvRendering(): EnvRendering {
  return {
    stackInViewLength: 7,
    localsInViewLength: 5,
  }
}
