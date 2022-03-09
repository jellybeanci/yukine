import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        cos(): number[];
    }
}

arrayCos.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'cos',
        function () {
            return arrayCos(this);
        }
    );
}

export function arrayCos(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.cos);
}