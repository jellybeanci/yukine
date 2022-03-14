import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";
import {sind} from "../math/sind";

fastMap.monkeyPatch();
sind.monkeyPatch();

declare global {
    interface Array<T> {
        sind(): number[];
    }
}

arraySind.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'sind',
        function () {
            return arraySind(this);
        }
    );
}

arraySind.removePatch = (): void => {
    removePatch(Array.prototype, 'sind');
}

export function arraySind(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.sind);
}