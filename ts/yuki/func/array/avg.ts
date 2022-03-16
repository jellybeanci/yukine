import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {sum} from "./sum";

sum.monkeyPatch();

declare global {
    interface Array<T> {
        avg(): number;
    }
}

avg.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'avg',
        function () {
            return avg(this);
        }
    );
}

avg.removePatch = (): void => {
    removePatch(Array.prototype, 'avg');
}

export function avg(thisArray: number[]): number {
    const len = thisArray.length;
    return thisArray.sum() / len;
}