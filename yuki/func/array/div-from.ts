import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {apply} from "./apply";

apply.monkeyPatch();

declare global {
    interface Array<T> {
        divFrom(other: number): number[];
    }
}

divFrom.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'divFrom',
        function (other: number) {
            return divFrom(this, other);
        }
    );
}

divFrom.removePatch = (): void => {
    removePatch(Array.prototype, 'divFrom');
}

export function divFrom(thisArray: number[], other: number): number[] {
    return thisArray.apply(other, (a, b) => b / a);
}