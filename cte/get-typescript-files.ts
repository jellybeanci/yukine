import {matcher} from "../ts/yuki/func/matcher";

const isTypeScriptFile = /^([a-z0-9_-]+)\.(ts)$/gi;

async function getTypeScriptFiles(fileArray: (string | string[])[]): Promise<string[]> {
    return <string[]>fileArray.flat(Number.POSITIVE_INFINITY).filter(matcher(isTypeScriptFile));
}