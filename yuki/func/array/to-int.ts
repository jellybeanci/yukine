import {safePrototypePatch} from "../../define-prototype";
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

export function toInt(thisArray: number[]): number[] {
    return thisArray.fastMap(int);
}