import {join} from "path";
import {tabber} from "./tabber";

export class FileNode extends Object {
    private readonly head: string;
    private children: FileNode[] = undefined;

    constructor(head: string, child?: FileNode[]) {
        super();
        this.head = head;
        this.children = child;
    }

    setChildren(children: FileNode[]): void {
        this.children = children;
    }

    printTree(tabCount: number): string {
        const header = `${this.head}`;
        let sub = "";
        if (this.children) {
            sub += `\n${tabber(tabCount)}║\n${tabber(tabCount)}╚ ${this.children.map(child => child.printTree(tabCount + 1)).join("\n" + tabber(tabCount + 1))}`
        }
        return header + sub;
    }

    * pathIterator(parentPath: string = "") {
        const path = join(parentPath, this.head);
        if (this.children) {
            for (const child of this.children) {
                yield* child.pathIterator(path);
            }
        } else {
            yield path;
        }
    }

    * [Symbol.iterator]() {
        yield this.head;
        if (this.children) {
            for (const child of this.children) {
                yield* child[Symbol.iterator]();
            }
        }
    }

    override toString(): string {
        return this.printTree(1)
    }
}
