import { Mod } from "@cicada-lang/inet/lib/lang/mod";
import { Node } from "@cicada-lang/inet/lib/lang/node";
import { Parser } from "@cicada-lang/inet/lib/lang/parser";
import { ParsingError } from "@cicada-lang/sexp/lib/errors";
export class PlaygroundState {
    constructor() {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "mod", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_name", {
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
        this.mod = load(this.text);
    }
    get names() {
        return this.mod.allNetNames();
    }
    get name() {
        if (this._name && this.names.includes(this._name)) {
            return this._name;
        }
        else {
            return this.names[0];
        }
    }
    set name(name) {
        this._name = name;
    }
    catchError(error) {
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
    refresh() {
        try {
            delete this.error;
            this.mod = load(this.text);
        }
        catch (error) {
            this.catchError(error);
        }
    }
}
function load(text) {
    Node.counter = 0;
    const url = new URL(window.location.href);
    const mod = new Mod(url);
    const parser = new Parser();
    const stmts = parser.parseStmts(text);
    for (const stmt of stmts) {
        stmt.execute(mod);
    }
    return mod;
}
