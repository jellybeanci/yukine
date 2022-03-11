import {safePrototypePatch} from "../../safe-patcher";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        floor(): number[];
    }
}

floor.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'floor',
        function () {
            return floor(this);
        }
    );
}

export function floor(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.floor);
}