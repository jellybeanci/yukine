import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {variance} from "./variance";

declare global {
    interface Array<T> {
        stddev(sample?: boolean): number;
    }
}

stddev.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'stddev',
        function (sample?: boolean) {
            return stddev(this, sample);
        }
    );
}

stddev.removePatch = (): void => {
    removePatch(Array.prototype, 'stddev');
}

export function stddev(self: number[], sample: boolean = false): number {
    return Math.sqrt(variance(self, sample));
}