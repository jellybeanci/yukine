import {safePrototypePatch} from "../../define-prototype";
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

export function arrayTand(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.tand);
}