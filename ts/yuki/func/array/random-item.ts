import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {randomInt} from "../math/random-int";

randomInt.monkeyPatch();

declare global {
    interface Array<T> {
        randomItem(): T;
    }
}

randomItem.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'randomItem',
        function () {
            return randomItem(this);
        }
    );
}

randomItem.removePatch = (): void => {
    removePatch(Array.prototype, 'randomItem');
}

export function randomItem<T>(thisArray: ArrayLike<T>): T {
    return thisArray[Math.randomInt(thisArray.length)];
}