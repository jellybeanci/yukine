import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";

declare global {
    interface Array<T> {
        swap(s1: number, s2: number): void;
    }
}

swap.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'swap',
        function (s1: number, s2: number) {
            return swap(this, s1, s2);
        }
    );
}

swap.removePatch = (): void => {
    removePatch(Array.prototype, 'swap');
}

export function swap(thisArray: any[], s1: number, s2: number): void {
    let temp = thisArray[s1];
    thisArray[s1] = thisArray[s2];
    thisArray[s2] = temp;
}