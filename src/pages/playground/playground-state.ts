import { Module } from "@cicada-lang/inet/lib/lang/module"
import { Net } from "@cicada-lang/inet/lib/lang/net"
import { Node } from "@cicada-lang/inet/lib/lang/node"
import { parseStmts } from "@cicada-lang/inet/lib/lang/parser"
import { NetRenderer } from "@cicada-lang/inet/lib/renderers/net-renderer"
import { ParsingError } from "@cicada-lang/sexp/lib/errors"

export class PlaygroundState {
  text = ""
  name?: string
  names: Array<string> = []
  net?: Net
  error?: {
    kind: string
    message: string
  }

  load(): Module {
    Node.counter = 0
    const url = new URL(window.location.href)
    const mod = new Module(url)
    const stmts = parseStmts(this.text)
    for (const stmt of stmts) {
      stmt.execute(mod)
    }

    this.names = mod.allNetNames()
    return mod
  }

  async render(mod: Module, name: string): Promise<void> {
    this.name = name
    delete this.error

    try {
      this.net = mod.buildNet(name)
    } catch (error) {
      if (!(error instanceof Error)) throw error
      if (error instanceof ParsingError) {
        this.error = {
          kind: "ParsingError",
          message: error.message + "\n" + error.span.report(this.text),
        }
      } else {
        this.error = {
          kind: error.name,
          message: error.message,
        }
      }
    }
  }
}
