import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {fastMap} from "./fast-map";
import {CallbackfnOP} from "./types/callback-op";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        operation(other: number[], callbackfn: CallbackfnOP): number[];
    }
}

operation.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'operation',
        function (other: number[], callbackfn: CallbackfnOP): number[] {
            return operation(this, other, callbackfn);
        }
    );
}

operation.removePatch = (): void => {
    removePatch(Array.prototype, 'operation');
}

export function operation(thisArray: number[], other: number[], callbackfn: CallbackfnOP): number[] {
    if (thisArray.length === 0 || thisArray.length !== other.length) {
        throw Error("Array lenghts must agree.");
    }
    return thisArray.fastMap((currentValue, index) => callbackfn(currentValue, other[index]));
}