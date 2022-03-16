import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {operation} from "./operation";

operation.monkeyPatch();

declare global {
    interface Array<T> {
        div(other: number[]): number[];
    }
}

div.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'div',
        function (other: number[]) {
            return div(this, other);
        }
    );
}

div.removePatch = (): void => {
    removePatch(Array.prototype, 'div');
}

export function div(thisArray: number[], other: number[]): number[] {
    return thisArray.operation(other, (a, b) => a / b);
}