import { __awaiter } from "tslib";
import { Module } from "@cicada-lang/inet/lib/lang/module";
import { parseStmts } from "@cicada-lang/inet/lib/lang/parser";
import { NetRenderer } from "@cicada-lang/inet/lib/renderers/net-renderer";
export class PlaygroundState {
    constructor() {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "nets", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            delete this.error;
            try {
                const url = new URL(window.location.href);
                const mod = new Module(url);
                const stmts = parseStmts(this.text);
                for (const stmt of stmts) {
                    stmt.execute(mod);
                }
                const renderer = new NetRenderer();
                for (const name of mod.allNetNames()) {
                    const net = mod.buildNet(name);
                    this.nets[name] = yield renderer.render(net);
                }
            }
            catch (error) {
                this.error = error;
            }
        });
    }
}
