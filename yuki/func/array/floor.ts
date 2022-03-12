import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
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

floor.removePatch = (): void => {
    removePatch(Array.prototype, 'floor');
}

export function floor(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.floor);
}