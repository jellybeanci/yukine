import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
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

cbrt.removePatch = (): void => {
    removePatch(Array.prototype, 'cbrt');
}

export function cbrt(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.cbrt);
}