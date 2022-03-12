import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {apply} from "./apply";

apply.monkeyPatch();

declare global {
    interface Array<T> {
        subBy(other: number): number[];
    }
}

subBy.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'subBy',
        function (other: number) {
            return subBy(this, other);
        }
    );
}

subBy.removePatch = (): void => {
    removePatch(Array.prototype, 'subBy');
}

export function subBy(thisArray: number[], other: number): number[] {
    return thisArray.apply(other, (a, b) => a - b);
}