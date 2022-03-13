import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {deepEqual} from "fast-equals";

declare global {
    interface Array<T> {
        deepEquals(other: any[]): boolean;
    }
}

deepEquals.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'deepEquals',
        function (other: any[]) {
            return deepEquals(this, other);
        }
    );
}

deepEquals.removePatch = (): void => {
    removePatch(Array.prototype, 'deepEquals');
}

export function deepEquals(thisArray: any[], other: any[]): boolean {
    if (thisArray.length !== other.length) return false;
    return deepEqual(thisArray, other);
}