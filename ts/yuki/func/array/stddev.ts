import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {avg} from "./avg";

avg.monkeyPatch();

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
    return Math.sqrt(self.subBy(self.avg()).square().sum() / self.length);
}