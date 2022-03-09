import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";
import {square} from "../math/square";

fastMap.monkeyPatch();
square.monkeyPatch();

declare global {
    interface Array<T> {
        square(): number[];
    }
}

arraySquare.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'square',
        function () {
            return arraySquare(this);
        }
    );
}

export function arraySquare(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.square);
}