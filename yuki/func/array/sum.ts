import {safePrototypePatch} from "../../safe-patcher";

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

export function sum(thisArray: number[], initialValue = 0): number {
    for (let i = 0, len = thisArray.length; i < len; i++) {
        initialValue += thisArray[i];
    }
    return initialValue
}