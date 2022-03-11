import {safePrototypePatch} from "../../safe-patcher";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        sqrt(): number[];
    }
}

sqrt.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'sqrt',
        function () {
            return sqrt(this);
        }
    );
}

export function sqrt(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.sqrt);
}