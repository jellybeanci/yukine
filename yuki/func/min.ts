import {safePrototypePatch} from "../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        min(): number;
    }
}

min.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'min',
        function () {
            return min(this);
        }
    );
}

export function min(thisArray: number[]): number {
    return Math.min(...thisArray);
}