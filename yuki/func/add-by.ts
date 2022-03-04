import {safePrototypePatch} from "../define-prototype";
import {apply} from "./apply";

apply.monkeyPatch();

declare global {
    interface Array<T> {
        addBy(other: number): number[];
    }
}

addBy.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'addBy',
        function (other: number) {
            return addBy(this, other);
        }
    );
}

export function addBy(thisArray: number[], other: number): number[] {
    return thisArray.apply(other, (a, b) => a + b);
}