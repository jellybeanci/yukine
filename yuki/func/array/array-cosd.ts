import {safePrototypePatch} from "../../safe-patcher";
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

export function arrayCosd(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.cosd);
}