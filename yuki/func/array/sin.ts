import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        sin(): number[];
    }
}

sin.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'sin',
        function () {
            return sin(this);
        }
    );
}

export function sin(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.sin);
}