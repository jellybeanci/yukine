import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        sin(): number[];
    }
}

arraySin.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'sin',
        function () {
            return arraySin(this);
        }
    );
}

arraySin.removePatch = (): void => {
    removePatch(Array.prototype, 'sin');
}

export function arraySin(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.sin);
}