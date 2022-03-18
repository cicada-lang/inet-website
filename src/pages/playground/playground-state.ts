import { Module } from "@cicada-lang/inet/lib/lang/module"
import { Net } from "@cicada-lang/inet/lib/lang/net"
import { parseStmts } from "@cicada-lang/inet/lib/lang/parser"
import { NetRenderer } from "@cicada-lang/inet/lib/renderers/net-renderer"
import { ParsingError } from "@cicada-lang/sexp/lib/errors"

export class PlaygroundState {
  text = ""

  nets: Record<string, string> = {}
  error?: {
    kind: string
    message: string
  }

  async render(): Promise<void> {
    delete this.error

    try {
      const url = new URL(window.location.href)
      const mod = new Module(url)
      const stmts = parseStmts(this.text)
      for (const stmt of stmts) {
        stmt.execute(mod)
      }

      const renderer = new NetRenderer()

      for (const name of mod.allNetNames()) {
        const net = mod.buildNet(name)
        this.nets[name] = await renderer.render(net)
      }
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
