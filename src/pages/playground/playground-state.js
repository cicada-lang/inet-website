import { __awaiter } from "tslib";
import { Module } from "@cicada-lang/inet/lib/lang/module";
import { parseStmts } from "@cicada-lang/inet/lib/lang/parser";
import { NetRenderer } from "@cicada-lang/inet/lib/renderers/net-renderer";
import { ParsingError } from "@cicada-lang/sexp/lib/errors";
export class PlaygroundState {
    constructor() {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "renderer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new NetRenderer()
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
    load() {
        const url = new URL(window.location.href);
        const mod = new Module(url);
        const stmts = parseStmts(this.text);
        for (const stmt of stmts) {
            stmt.execute(mod);
        }
        return mod;
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            delete this.error;
            try {
                const mod = this.load();
                for (const name of mod.allNetNames()) {
                    const net = mod.buildNet(name);
                    this.nets[name] = yield this.renderer.render(net);
                }
            }
            catch (error) {
                if (!(error instanceof Error))
                    throw error;
                if (error instanceof ParsingError) {
                    this.error = {
                        kind: "ParsingError",
                        message: error.message + "\n" + error.span.report(this.text),
                    };
                }
                else {
                    this.error = {
                        kind: error.name,
                        message: error.message,
                    };
                }
            }
        });
    }
}
