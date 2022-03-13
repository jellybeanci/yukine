import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        min(): number;
    }
}

min.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'min',
        function () {
            return min(this);
        }
    );
}

min.removePatch = (): void => {
    removePatch(Array.prototype, 'min');
}

export function min(thisArray: number[]): number {
    return Math.min(...thisArray);
}