import {safePrototypePatch} from "../../safe-patcher";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        cbrt(): number[];
    }
}

cbrt.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'cbrt',
        function () {
            return cbrt(this);
        }
    );
}

export function cbrt(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.cbrt);
}