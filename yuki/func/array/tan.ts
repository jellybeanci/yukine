import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        tan(): number[];
    }
}

tan.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'tan',
        function () {
            return tan(this);
        }
    );
}

export function tan(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.tan);
}