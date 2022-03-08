import {safePrototypePatch} from "../../define-prototype";
import {cube} from "../math/cube";

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