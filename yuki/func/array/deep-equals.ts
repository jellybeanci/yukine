import {safePrototypePatch} from "../../safe-patcher";
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

export function deepEquals(thisArray: any[], other: any[]): boolean {
    if (thisArray.length !== other.length) return false;
    return deepEqual(thisArray, other);
}