import {safePrototypePatch} from "../../safe-patcher";
import {apply} from "./apply";
import {removePatch} from "../../remove-patch";

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

subFrom.removePatch = (): void => {
    removePatch(Array.prototype, 'subFrom');
}

export function subFrom(thisArray: number[], other: number): number[] {
    return thisArray.apply(other, (a, b) => b - a);
}