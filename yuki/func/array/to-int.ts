import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {fastMap} from "./fast-map";
import {int} from "@jellybeanci/int";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        toInt(): number[];
    }
}

toInt.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'toInt',
        function () {
            return toInt(this);
        }
    );
}

toInt.removePatch = (): void => {
    removePatch(Array.prototype, 'toInt');
}

export function toInt(thisArray: number[]): number[] {
    return thisArray.fastMap(int);
}