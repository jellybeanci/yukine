import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {avg} from "./avg";
import {sum} from "./sum";
import {subBy} from "./sub-by";
import {arraySquare} from "./array-square";

declare global {
    interface Array<T> {
        variance(sample?: boolean): number;
    }
}

variance.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'variance',
        function (sample?: boolean) {
            return variance(this, sample);
        }
    );
}

variance.removePatch = (): void => {
    removePatch(Array.prototype, 'variance');
}

export function variance(self: number[], sample: boolean = false): number {
    const divider = sample ? self.length - 1 : self.length;
    return sum(arraySquare(subBy(self, avg(self)))) / divider;
}