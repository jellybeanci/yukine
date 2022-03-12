import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        cos(): number[];
    }
}

arrayCos.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'cos',
        function () {
            return arrayCos(this);
        }
    );
}

arrayCos.removePatch = (): void => {
    removePatch(Array.prototype, 'cos');
}

export function arrayCos(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.cos);
}