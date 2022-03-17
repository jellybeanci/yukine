import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {fastMap} from "./fast-map";
import {cosd} from "../math/cosd";

fastMap.monkeyPatch();
cosd.monkeyPatch();

declare global {
    interface Array<T> {
        cosd(): number[];
    }
}

arrayCosd.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'cosd',
        function () {
            return arrayCosd(this);
        }
    );
}

arrayCosd.removePatch = (): void => {
    removePatch(Array.prototype, 'cosd');
}

export function arrayCosd(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.cosd);
}