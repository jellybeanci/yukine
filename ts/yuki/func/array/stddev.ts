import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {sum} from "./sum";
import {avg} from "./avg";
import {subBy} from "./sub-by";
import {arraySquare} from "./array-square";

declare global {
    interface Array<T> {
        stddev(): number;
    }
}

stddev.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'stddev',
        function () {
            return stddev(this);
        }
    );
}

stddev.removePatch = (): void => {
    removePatch(Array.prototype, 'stddev');
}

export function stddev(self: number[]): number {
    return Math.sqrt(sum(arraySquare(subBy(self, avg(self))))/ self.length);
}