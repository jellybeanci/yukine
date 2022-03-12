import {Dirent, PathLike, promises} from "fs";
import {join} from "path";
import {isDefined} from "./is-defined";

const {readdir} = promises;

const TAB = "  ";

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
    return TAB.repeat(tabCount);
}

class Node extends Object {
    private readonly head: string;
    private children: Node[] = undefined;

    constructor(head: string, child?: Node[]) {
        super();
        this.head = head;
        this.children = child;
    }

    setChildren(children: Node[]): void {
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

async function dumpDirObject(entryPoint: string): Promise<Node[]> {
    const currentDir = await readdir(entryPoint, {withFileTypes: true, encoding: "utf-8"});
    return Promise.all(currentDir.map(async dirent => {
            const node = new Node(dirent.name);
            if (dirent.isDirectory()) node.setChildren(await dumpDirObject(join(entryPoint, dirent.name)));
            return node;
        })
    );
}

async function dumpPaths(path: string, from: string = __dirname): Promise<Node> {
    const entryPoint = join(from, path);
    const dirArray = await dumpDirObject(entryPoint);
    return new Node(path, dirArray);
}

const neg = (callback: (args: any) => boolean) => (args: any) => !callback(args);

// const fx = (x) => x > 25;
//
// const nfx = neg(fx);

const isTypeScriptFile = /^([a-z0-9_-]+)\.(ts)$/gi;
const isTypeScriptPath = /^(\/?[a-z0-9_-]+)*(\.ts)$/gi;

const matcher = (expression: RegExp) => (str: string) => str.match(expression) !== null;

async function getTypeScriptFiles(fileArray: (string | string[])[]): Promise<string[]> {
    return <string[]>fileArray.flat(Number.POSITIVE_INFINITY).filter(matcher(isTypeScriptFile));
}

async function getTypeScriptPaths(root: Node): Promise<string[]> {
    const filtered: string[] = [];
    for (const filePath of root.pathIterator()) {
        if (matcher(isTypeScriptPath)(filePath)) {
            filtered.push(filePath);
        }
    }
    return filtered;
}


async function autoImporter(fileList: string[]) {
    return Promise.all(fileList.map(async file => import(`./${file}`)));
}

function extractFunction(property: unknown, name: string): Function | undefined {
    const value = Object.values(property)[0];
    return value ? value[name] : undefined;
}

function getPatch() {

}

(async main => {

    const root = await dumpPaths("func");
    const tsPaths = await getTypeScriptPaths(root);
    const imports = await autoImporter(tsPaths);
    imports.forEach(im => {
        console.log(im, "monkey:", isDefined(extractFunction(im, "monkeyPatch")), "remove:", isDefined(extractFunction(im, "removePatch")));
    });


    // console.log(imports);
    // for (const rootElement of root.pathIterator()) {
    //     console.log(rootElement)
    // }

    // await getTypeScriptPaths(root);

    // console.log(root.toString())
    // console.dir(dirArray, {'depth': null});
    // console.log(JSON.stringify(root));

    // const dirArr = await dumpDir(entryPoint);
    // const typeScriptFiles = await getTypeScriptFiles(dirArr);
    // console.log(typeScriptFiles);
    // await autoImporter(typeScriptFiles);
})();