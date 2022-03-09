import {safePrototypePatch} from "../../define-prototype";
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

export function arrayCotd(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.cotd);
}