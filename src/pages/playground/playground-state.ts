import { Module } from "@cicada-lang/inet/lib/lang/module"
import { Net } from "@cicada-lang/inet/lib/lang/net"
import { parseStmts } from "@cicada-lang/inet/lib/lang/parser"
import { NetRenderer } from "@cicada-lang/inet/lib/renderers/net-renderer"

export class PlaygroundState {
  text = ""

  nets: Record<string, string> = {}
  error?: unknown

  async render(): Promise<void> {
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
      this.error = error
    }
  }
}
