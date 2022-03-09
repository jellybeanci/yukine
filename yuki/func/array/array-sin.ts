import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        sin(): number[];
    }
}

arraySin.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'sin',
        function () {
            return arraySin(this);
        }
    );
}

export function arraySin(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.sin);
}