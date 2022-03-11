import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {fastMap} from "./fast-map";
import {Binary} from "./types/binary";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        binarize(): Binary[];
    }
}

binarize.monkeyPatch = (): void => {
    safePrototypePatch(Array, "binarize",
        function () {
            return binarize(this);
        }
    );
}

binarize.removePatch = (): void => {
    removePatch(Array.prototype, 'binarize');
}

export function binarize(thisArray: any[]): Binary[] {
    return thisArray.fastMap(currentValue => !!currentValue ? 1 : 0);
}