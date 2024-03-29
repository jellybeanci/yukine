import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";
import {cot} from "../math/cot";

fastMap.monkeyPatch();
cot.monkeyPatch();

declare global {
    interface Array<T> {
        cot(): number[];
    }
}

arrayCot.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'cot',
        function () {
            return arrayCot(this);
        }
    );
}

arrayCot.removePatch = (): void => {
    removePatch(Array.prototype, 'cot');
}

export function arrayCot(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.cot);
}