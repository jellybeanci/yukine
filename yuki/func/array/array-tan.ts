import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
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

arrayTan.removePatch = (): void => {
    removePatch(Array.prototype, 'tan');
}

export function arrayTan(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.tan);
}