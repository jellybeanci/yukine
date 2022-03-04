import {safePrototypePatch} from "../../define-prototype";
import {apply} from "./apply";

apply.monkeyPatch();

declare global {
    interface Array<T> {
        divBy(other: number): number[];
    }
}

divBy.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'divBy',
        function (other: number) {
            return divBy(this, other);
        }
    );
}

export function divBy(thisArray: number[], other: number): number[] {
    return thisArray.apply(other, (a, b) => a / b);
}