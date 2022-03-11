import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
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

round.removePatch = (): void => {
    removePatch(Array.prototype, 'round');
}

export function round(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.round);
}