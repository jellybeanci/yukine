import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        max(): number;
    }
}

max.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'max',
        function () {
            return max(this);
        }
    );
}

max.removePatch = (): void => {
    removePatch(Array.prototype, 'max');
}

export function max(thisArray: number[]): number {
    return Math.max(...thisArray);
}