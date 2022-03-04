import {safePrototypePatch} from "../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
    interface Array<T> {
        pow(power: number): number[];
    }
}

pow.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'pow',
        function (power: number) {
            return pow(this, power);
        }
    );
}

export function pow(thisArray: number[], power: number): number[] {
    return thisArray.fastMap(currentValue => Math.pow(currentValue, power));
}