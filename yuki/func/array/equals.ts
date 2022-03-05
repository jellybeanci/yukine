import {safePrototypePatch} from "../../define-prototype";
import {PrimitiveType} from "./types/primitive-type";

declare global {
    interface Array<T> {
        equals(other: PrimitiveType[]): boolean;
    }
}

equals.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'equals',
        function (other: PrimitiveType[]) {
            return equals(this, other);
        }
    );
}

export function equals(thisArray: PrimitiveType[], other: PrimitiveType[]): boolean {
    if (thisArray.length !== other.length) return false;
    for (let i = 0, len = thisArray.length; i < len; i++) {
        if (thisArray[i] !== other[i]) return false;
    }
    return true;
}