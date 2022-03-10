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

(async main => {
    const entryPoint = join(__dirname, "func");
    const dirArray = await dumpDir(entryPoint);
    console.log(dirArray)
    // await printDirTable("func")
})();