import { HomeState } from './HomeState'

export function createHomeState(): HomeState {
  return {
    stackInViewLength: 7,
    localsInViewLength: 5,
  }
}
