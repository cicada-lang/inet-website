export class State {
  text = ""
  // mod: Mod
  error?: {
    kind: string
    message: string
  }

  constructor() {
    // this.mod = load(this.text)
  }
}
