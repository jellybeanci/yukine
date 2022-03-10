import {Dirent, PathLike, promises} from "fs";
import {join} from "path";

const {readdir} = promises;


async function deepDirList(path: PathLike): Promise<Dirent[]> {
    return await readdir(path, {withFileTypes: true, encoding: "utf-8"});
}

async function printDirTable(path: string): Promise<void> {
    const methods = ['isBlockDevice', 'isCharacterDevice', 'isDirectory', 'isFIFO', 'isFile', 'isSocket', 'isSymbolicLink'];
    const libPath = join(__dirname, path);
    const results = await deepDirList(libPath);
    const table = results.map(result => {
        const cur = {name: result.name};
        for (const method of methods) {
            cur[method] = result[method]();
        }
        return cur;
    });
    console.table(table);
}

async function dumpDir(entyPoint: string): Promise<any> {
    const currentDir = await readdir(entyPoint, {withFileTypes: true, encoding: "utf-8"});
    return Promise.all(currentDir.map(
        async dirent => dirent.isDirectory()
            ? await dumpDir(join(entyPoint, dirent.name))
            : dirent.name)
    );
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

    override toString(): string {
        return `${this.head}:\r\t${this.childeren.length > 0 ? this.childeren : ""}`;
    }

}

async function dumpDirObject(entyPoint: string): Promise<Node[]> {
    const currentDir = await readdir(entyPoint, {withFileTypes: true, encoding: "utf-8"});
    return Promise.all(currentDir.map(async dirent => {
            const node = new Node(dirent.name);
            if (dirent.isDirectory()) node.setChilderen(await dumpDirObject(join(entyPoint, dirent.name)));
            return node;
        })
    );
}

(async main => {
    const entryPoint = join(__dirname, "func");
    const dirArray = await dumpDirObject(entryPoint);
    console.dir(dirArray, {'depth': null})
})();