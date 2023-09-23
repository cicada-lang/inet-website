import { FunctionDefinition } from '@cicada-lang/inet-js'
import { EnvRendering } from '../../components/env/EnvRendering'

export type SelectedWord = {
  name: string
  definition: FunctionDefinition
  envRendering: EnvRendering
}
