import {safePrototypePatch} from "../../safe-patcher";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        round(): number[];
    }
}

round.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'round',
        function () {
            return round(this);
        }
    );
}

export function round(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.round);
}