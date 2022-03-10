import {Dirent, PathLike, promises} from "fs";
import {join} from "path";

const {readdir} = promises;


async function deepDirList(path: PathLike): Promise<Dirent[]> {
    return await readdir(path, {withFileTypes: true, encoding: "utf-8"});
}

async function printDirTable(path: string): Promise<void> {
    const methods = ['isBlockDevice', 'isCharacterDevice', 'isDirectory', 'isFIFO', 'isFile', 'isSocket', 'isSymbolicLink'];
    const results = await deepDirList(join(__dirname, path));
    const table = results.map(result => {
        const cur = {name: result.name};
        for (const method of methods) {
            cur[method] = result[method]();
        }
        return cur;
    });
    console.table(table);
}

async function dumpDir(entryPoint: string): Promise<any> {
    const currentDir = await readdir(entryPoint, {withFileTypes: true, encoding: "utf-8"});
    return Promise.all(currentDir.map(
        async dirent => dirent.isDirectory()
            ? await dumpDir(join(entryPoint, dirent.name))
            : dirent.name)
    );
}

function tabber(tabCount: number = 1) {
    return "  ".repeat(tabCount);
}

class Node extends Object {
    private head: string;
    private childeren: Node[] = undefined;

    constructor(head: string, child?: Node[]) {
        super();
        this.head = head;
        this.childeren = child;
    }

    setChilderen(childeren: Node[]): void {
        this.childeren = childeren;
    }

    printTree(tabCount: number): string {
        const header = `${this.head}`;
        let sub = "";
        if (this.childeren) {
            sub += `\n${tabber(tabCount)}║\n${tabber(tabCount)}╚ ${this.childeren.map(child => child.printTree(tabCount + 1)).join("\n" + tabber(tabCount + 1))}`
        }
        return header + sub;
    }

    override toString(): string {
        return this.printTree(1)
    }
}

async function dumpDirObject(entryPoint: string): Promise<Node[]> {
    const currentDir = await readdir(entryPoint, {withFileTypes: true, encoding: "utf-8"});
    return Promise.all(currentDir.map(async dirent => {
            const node = new Node(dirent.name);
            if (dirent.isDirectory()) node.setChilderen(await dumpDirObject(join(entryPoint, dirent.name)));
            return node;
        })
    );
}

(async main => {
    const entryPoint = join(__dirname, "func");
    const dirArray = await dumpDirObject(entryPoint);
    const root = new Node("func", dirArray);
    // console.dir(dirArray, {'depth': null});
    // console.log(JSON.stringify(dirArray));
    console.log(root.toString())


})();