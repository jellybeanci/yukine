import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";

declare global {
    interface Array<T> {
        prod(initialValue?: number): number;
    }
}

prod.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'prod',
        function (initialValue?: number) {
            return prod(this, initialValue);
        }
    );
}

prod.removePatch = (): void => {
    removePatch(Array.prototype, 'prod');
}

export function prod(thisArray: number[], initialValue = 1): number {
    for (let i = 0, len = thisArray.length; i < len; i++) {
        initialValue *= thisArray[i];
    }
    return initialValue
}