import {safePrototypePatch} from "../../define-prototype";
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

export function arrayCube(thisArray: number[]): number[] {
    return thisArray.fastMap(cube);
}