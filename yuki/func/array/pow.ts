import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        pow(power: number): number[];
    }
}

pow.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'pow',
        function (power: number) {
            return pow(this, power);
        }
    );
}

pow.removePatch = (): void => {
    removePatch(Array.prototype, 'pow');
}

export function pow(thisArray: number[], power: number): number[] {
    return thisArray.fastMap(currentValue => Math.pow(currentValue, power));
}