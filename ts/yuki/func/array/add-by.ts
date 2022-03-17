import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {apply} from "./apply";

apply.monkeyPatch();

declare global {
    interface Array<T> {
        addBy(other: number): number[];
    }
}

addBy.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'addBy',
        function (other: number) {
            return addBy(this, other);
        }
    );
}

addBy.removePatch = (): void => {
    removePatch(Array.prototype, 'addBy');
}

export function addBy(thisArray: number[], other: number): number[] {
    return thisArray.apply(other, (a, b) => a + b);
}