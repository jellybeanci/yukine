import {Dirent, PathLike, promises} from "fs";
import {join} from "path";
import {range} from "@jellybeanci/range";

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
    private readonly head: string;
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

    [Symbol.iterator] = function* () {
        yield this.head;
        if (this.childeren) {
            for (const child of this.childeren) {
                yield* child[Symbol.iterator]();
            }
        }
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

const isTypeScriptFile = /^([a-z0-9_-]+)\.(ts)$/gi;

const neg = (callback: (args: any) => boolean) => (args: any) => !callback(args);

const fx = (x) => x > 25;
const nfx = neg(fx);

const numbers = range(1, 50);

// console.log(numbers.filter(nfx))

// for (const file of files) {
//     const matches = file.match(isTypeScriptFile)?.length > 0;
//     console.log(file, ":", matches)
// }

const matcher = (str: string) => str.match(isTypeScriptFile) !== null;

async function getTypeScriptFiles(fileArray: (string | string[])[]): Promise<string[]> {
    const files = <string[]>fileArray.flat(Number.POSITIVE_INFINITY).filter(matcher);
    return files.filter(matcher);
}

async function autoImporter(fileList: string[]) {
    const imported = Promise.all(fileList.map(async file => import(file)));
    console.log(await imported);
}

(async main => {
    const entryPoint = join(__dirname, "func");
    const dirArray = await dumpDirObject(entryPoint);
    const root = new Node("func", dirArray);

    for (const rootElement of root) {
        console.log(rootElement)
    }

    // console.log(root.toString())
    // console.dir(dirArray, {'depth': null});
    // console.log(JSON.stringify(root));

    // const dirArr = await dumpDir(entryPoint);
    // const typeScriptFiles = await getTypeScriptFiles(dirArr);
    // console.log(typeScriptFiles);
    // await autoImporter(typeScriptFiles);
})();