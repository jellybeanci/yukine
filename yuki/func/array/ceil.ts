import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";

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

ceil.removePatch = (): void => {
    removePatch(Array.prototype, 'ceil');
}

export function ceil(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.ceil);
}