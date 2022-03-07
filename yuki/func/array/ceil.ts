import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";
import {int} from "@jellybeanci/int";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        ceil(): number[];
    }
}

ceil.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'ceil',
        function () {
            return ceil(this);
        }
    );
}

export function ceil(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.ceil);
}