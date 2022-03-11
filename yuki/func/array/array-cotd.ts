import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {fastMap} from "./fast-map";
import {cotd} from "../math/cotd";

fastMap.monkeyPatch();
cotd.monkeyPatch();

declare global {
    interface Array<T> {
        cotd(): number[];
    }
}

arrayCotd.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'cotd',
        function () {
            return arrayCotd(this);
        }
    );
}

arrayCotd.removePatch = (): void => {
    removePatch(Array.prototype, 'cotd');
}

export function arrayCotd(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.cotd);
}