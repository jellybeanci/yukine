import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {operation} from "./operation";

operation.monkeyPatch();

declare global {
    interface Array<T> {
        mult(other: number[]): number[];
    }
}

mult.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'mult',
        function (other: number[]) {
            return mult(this, other);
        }
    );
}

mult.removePatch = (): void => {
    removePatch(Array.prototype, 'mult');
}

export function mult(thisArray: number[], other: number[]): number[] {
    return thisArray.operation(other, (a, b) => a * b);
}