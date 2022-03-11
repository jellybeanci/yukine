import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";

declare global {
    interface Array<T> {
        sum(initialValue?: number): number;
    }
}

sum.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'sum',
        function (initialValue?: number) {
            return sum(this, initialValue);
        }
    );
}

sum.removePatch = (): void => {
    removePatch(Array.prototype, 'sum');
}

export function sum(thisArray: number[], initialValue = 0): number {
    for (let i = 0, len = thisArray.length; i < len; i++) {
        initialValue += thisArray[i];
    }
    return initialValue
}