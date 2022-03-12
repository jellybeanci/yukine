import {join} from "path";
import {Dirent, PathLike, promises} from "fs";

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

printDirTable("../yuki")