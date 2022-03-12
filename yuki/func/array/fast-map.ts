import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";

declare global {
    interface Array<T> {
        fastMap<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[];
    }
}

fastMap.monkeyPatch = (): void => {
    safePrototypePatch(
        Array, 'fastMap',
        function (callbackfn: (value: any, index: number, array: any[]) => any) {
            return fastMap(this, callbackfn);
        }
    );
}

fastMap.removePatch = (): void => {
    removePatch(Array.prototype, 'fastMap');
}

export function fastMap<T, U>(array: T[], callbackfn: (value: T, index: number, array: T[]) => U): U[] {
    const responseArray = Array(array.length);
    for (let i = 0, len = responseArray.length; i < len; i++) {
        responseArray[i] = callbackfn(array[i], i, array);
    }
    return responseArray;
}