import {safePrototypePatch} from "../../safe-patcher";
import {apply} from "./apply";

apply.monkeyPatch();

declare global {
    interface Array<T> {
        subFrom(other: number): number[];
    }
}

subFrom.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'subFrom',
        function (other: number) {
            return subFrom(this, other);
        }
    );
}

export function subFrom(thisArray: number[], other: number): number[] {
    return thisArray.apply(other, (a, b) => b - a);
}