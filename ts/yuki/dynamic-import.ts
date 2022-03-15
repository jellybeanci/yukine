import {promises} from "fs";
import {join} from "path";
import {exist} from "./utils/exist";
import {matcher} from "./utils/matcher";
import {Monkey} from "./types/monkey";
import {FileNode} from "./utils/file-node";
import {Patch} from "./enums/patch";

const {readdir} = promises;

const isTypeScriptPath = /^(([\/\\])?[a-z0-9_-]+)*(\.[tj]s)$/gi;

async function dumpDirObject(entryPoint: string): Promise<FileNode[]> {
    const currentDir = await readdir(entryPoint, {withFileTypes: true, encoding: "utf-8"});
    return Promise.all(currentDir.map(async dirent => {
            const node = new FileNode(dirent.name);
            if (dirent.isDirectory()) node.setChildren(await dumpDirObject(join(entryPoint, dirent.name)));
            return node;
        })
    );
}

async function dumpPaths(path: string, from: string = __dirname): Promise<FileNode> {
    const entryPoint = join(from, path);
    const dirArray = await dumpDirObject(entryPoint);
    return new FileNode(path, dirArray);
}

async function getTypeScriptPaths(root: FileNode): Promise<string[]> {
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

function getPatch(module: object): Monkey {
    const monkeyPatch = extractFunction(module, "monkeyPatch");
    const removePatch = extractFunction(module, "removePatch");
    if (monkeyPatch === undefined || removePatch === undefined) return void 0;
    return {monkeyPatch, removePatch};
}

function filterModules(modules: object[]): Monkey[] {
    return modules.map(getPatch).filter(exist);
}

export async function patchFactory(funcPath: string = "func"): Promise<(patch: Patch) => void> {
    const root = await dumpPaths(funcPath);
    const tsPaths = await getTypeScriptPaths(root);
    const imports = await autoImporter(tsPaths);
    const filtered = filterModules(imports);
    return function (patch: Patch) {
        switch (patch) {
            case Patch.ACTIVATE:
                for (const module of filtered) module.monkeyPatch();
                break;
            case Patch.DEACTIVATE:
                for (const module of filtered) module.removePatch();
                break;
            default:
                throw Error("Unreachable!");
        }
    }
}


(async main => {
    // const root = await dumpPaths("func");
    // const tsPaths = await getTypeScriptPaths(root);
    // const imports = await autoImporter(tsPaths);
    // filterModules(imports).forEach(monkey => {
    //     console.log(monkey);
    // })

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