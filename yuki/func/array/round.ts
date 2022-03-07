import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";
import {int} from "@jellybeanci/int";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        round(): number[];
    }
}

round.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'round',
        function () {
            return round(this);
        }
    );
}

export function round(thisArray: number[]): number[] {
    return thisArray.fastMap(Math.round);
}