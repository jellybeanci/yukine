import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
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

abs.removePatch = (): void => {
    removePatch(Array.prototype, 'abs');
}

export function abs(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.abs);
}