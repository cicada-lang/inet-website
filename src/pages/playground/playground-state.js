import { __awaiter } from "tslib";
import { Module } from "@cicada-lang/inet/lib/lang/module";
import { Node } from "@cicada-lang/inet/lib/lang/node";
import { parseStmts } from "@cicada-lang/inet/lib/lang/parser";
import { ParsingError } from "@cicada-lang/sexp/lib/errors";
export class PlaygroundState {
    constructor() {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "names", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "net", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    load() {
        Node.counter = 0;
        const url = new URL(window.location.href);
        const mod = new Module(url);
        const stmts = parseStmts(this.text);
        for (const stmt of stmts) {
            stmt.execute(mod);
        }
        this.names = mod.allNetNames();
        return mod;
    }
    render(mod, name) {
        return __awaiter(this, void 0, void 0, function* () {
            this.name = name;
            delete this.error;
            try {
                this.net = mod.buildNet(name);
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
