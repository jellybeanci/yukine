import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {apply} from "./apply";

apply.monkeyPatch();

declare global {
    interface Array<T> {
        multBy(other: number): number[];
    }
}

multBy.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'multBy',
        function (other: number) {
            return multBy(this, other);
        }
    );
}

multBy.removePatch = (): void => {
    removePatch(Array.prototype, 'multBy');
}

export function multBy(thisArray: number[], other: number): number[] {
    return thisArray.apply(other, (a, b) => a * b);
}