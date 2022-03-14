import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";
import {cube} from "../math/cube";

fastMap.monkeyPatch();
cube.monkeyPatch();

declare global {
    interface Array<T> {
        cube(): number[];
    }
}

arrayCube.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'cube',
        function () {
            return arrayCube(this);
        }
    );
}

arrayCube.removePatch = (): void => {
    removePatch(Array.prototype, 'cube');
}

export function arrayCube(thisArray: number[]): number[] {
    return thisArray.fastMap(cube);
}