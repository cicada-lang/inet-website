import { Module } from "@cicada-lang/inet/lib/lang/module"
import { Net } from "@cicada-lang/inet/lib/lang/net"
import { Node } from "@cicada-lang/inet/lib/lang/node"
import { parseStmts } from "@cicada-lang/inet/lib/lang/parser"
import { NetRenderer } from "@cicada-lang/inet/lib/renderers/net-renderer"
import { ParsingError } from "@cicada-lang/sexp/lib/errors"

export class PlaygroundState {
  text = ""
  mod: Module
  name?: string
  error?: {
    kind: string
    message: string
  }

  constructor() {
    this.mod = load(this.text)
  }

  async refresh(): Promise<void> {
    try {
      delete this.error
      this.mod = load(this.text)
      this.name = this.name || this.mod.allNetNames()[0]
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

function load(text: string): Module {
  Node.counter = 0
  const url = new URL(window.location.href)
  const mod = new Module(url)
  const stmts = parseStmts(text)
  for (const stmt of stmts) {
    stmt.execute(mod)
  }

  return mod
}
