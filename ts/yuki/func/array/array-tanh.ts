import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        tanh(): number[];
    }
}

arrayTanh.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'tanh',
        function () {
            return arrayTanh(this);
        }
    );
}

arrayTanh.removePatch = (): void => {
    removePatch(Array.prototype, 'tanh');
}

export function arrayTanh(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.tanh);
}