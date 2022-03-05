import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";
import {CallbackfnOP} from "./types/callback-op";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        apply(value: number, callbackfn: CallbackfnOP): number[];
    }
}

apply.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'apply',
        function (value: number, callbackfn: CallbackfnOP): number[] {
            return apply(this, value, callbackfn);
        }
    );
}

export function apply(thisArray: number[], value: number, callbackfn: CallbackfnOP): number[] {
    return thisArray.fastMap(currentValue => callbackfn(currentValue, value));
}