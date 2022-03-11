import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {fastMap} from "./fast-map";
import {tand} from "../math/tand";

fastMap.monkeyPatch();
tand.monkeyPatch();

declare global {
    interface Array<T> {
        tand(): number[];
    }
}

arrayTand.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'tand',
        function () {
            return arrayTand(this);
        }
    );
}

arrayTand.removePatch = (): void => {
    removePatch(Array.prototype, 'tand');
}

export function arrayTand(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.tand);
}