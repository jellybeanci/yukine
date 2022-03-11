import {safePrototypePatch} from "../../safe-patcher";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        abs(): number[];
    }
}

abs.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'abs',
        function () {
            return abs(this);
        }
    );
}

export function abs(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.abs);
}