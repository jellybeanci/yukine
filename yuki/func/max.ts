import {safePrototypePatch} from "../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        max(): number;
    }
}

max.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'max',
        function () {
            return max(this);
        }
    );
}

export function max(thisArray: number[]): number {
    return Math.max(...thisArray);
}