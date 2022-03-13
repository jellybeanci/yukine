import {join} from "path";
import {promises} from "fs";

const {readdir} = promises;

async function dumpDir(entryPoint: string): Promise<any> {
    const currentDir = await readdir(entryPoint, {withFileTypes: true, encoding: "utf-8"});
    return Promise.all(currentDir.map(
        async dirent => dirent.isDirectory()
            ? await dumpDir(join(entryPoint, dirent.name))
            : dirent.name)
    );
}