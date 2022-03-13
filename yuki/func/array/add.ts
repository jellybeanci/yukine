import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {operation} from "./operation";

operation.monkeyPatch();

declare global {
    interface Array<T> {
        add(other: number[]): number[];
    }
}

add.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'add',
        function (other: number[]) {
            return add(this, other);
        }
    );
}

add.removePatch = (): void => {
    removePatch(Array.prototype, 'add');
}

export function add(thisArray: number[], other: number[]): number[] {
    return thisArray.operation(other, (a, b) => a + b);
}