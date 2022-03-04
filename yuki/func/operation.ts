import {safePrototypePatch} from "../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface CallbackfnOP {
        (thisValue: number, otherValue: number): number;
    }

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

export function operation(thisArray: number[], other: number[], callbackfn: CallbackfnOP): number[] {
    if (thisArray.length === 0 || thisArray.length !== other.length) {
        throw Error("Array lenghts must agree.");
    }
    return thisArray.fastMap((currentValue, index) => callbackfn(currentValue, other[index]));
}