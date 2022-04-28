import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {avg} from "./avg";
import {sum} from "./sum";
import {subBy} from "./sub-by";
import {arraySquare} from "./array-square";

declare global {
    interface Array<T> {
        variance(): number;
    }
}

variance.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'variance',
        function () {
            return variance(this);
        }
    );
}

variance.removePatch = (): void => {
    removePatch(Array.prototype, 'variance');
}

export function variance(self: number[]): number {
    return sum(arraySquare(subBy(self, avg(self)))) / self.length
}