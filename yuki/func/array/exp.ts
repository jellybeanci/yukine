import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        exp(): number[];
    }
}

exp.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'exp',
        function () {
            return exp(this);
        }
    );
}

exp.removePatch = (): void => {
    removePatch(Array.prototype, 'exp');
}

export function exp(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.exp);
}