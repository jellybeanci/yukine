import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        tan(): number[];
    }
}

arrayTan.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'tan',
        function () {
            return arrayTan(this);
        }
    );
}

export function arrayTan(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.tan);
}