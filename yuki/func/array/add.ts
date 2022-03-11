import {safePrototypePatch} from "../../safe-patcher";
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

export function add(thisArray: number[], other: number[]): number[] {
    return thisArray.operation(other, (a, b) => a + b);
}