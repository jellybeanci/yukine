import {fastMap} from "./fast-map";
import {Binary} from "./types/binary";
import {safePrototypePatch} from "../../define-prototype";

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

export function binarize(thisArray: any[]): Binary[] {
    return thisArray.fastMap(currentValue => !!currentValue ? 1 : 0);
}