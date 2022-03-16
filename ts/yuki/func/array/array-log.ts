import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        log(): number[];
    }
}

arrayLog.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'log',
        function () {
            return arrayLog(this);
        }
    );
}

arrayLog.removePatch = (): void => {
    removePatch(Array.prototype, 'log');
}

export function arrayLog(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.log);
}