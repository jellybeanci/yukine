import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        log10(): number[];
    }
}

arrayLog10.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'log10',
        function () {
            return arrayLog10(this);
        }
    );
}

arrayLog10.removePatch = (): void => {
    removePatch(Array.prototype, 'log10');
}

export function arrayLog10(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.log10);
}