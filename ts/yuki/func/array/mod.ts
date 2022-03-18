import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        mod(modulo: number): number[];
    }
}

mod.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'mod',
        function (modulo: number) {
            return mod(this, modulo);
        }
    );
}

mod.removePatch = (): void => {
    removePatch(Array.prototype, 'mod');
}

export function mod(thisArray: number[], modulo: number): number[] {
    return thisArray.fastMap(x => x % modulo);
}