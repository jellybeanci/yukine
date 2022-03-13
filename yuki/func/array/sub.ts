import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {operation} from "./operation";

operation.monkeyPatch();

declare global {
    interface Array<T> {
        sub(other: number[]): number[];
    }
}

sub.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'sub',
        function (other: number[]) {
            return sub(this, other);
        }
    );
}

sub.removePatch = (): void => {
    removePatch(Array.prototype, 'sub');
}

export function sub(thisArray: number[], other: number[]): number[] {
    return thisArray.operation(other, (a, b) => a - b);
}