import {safePrototypePatch} from "../../define-prototype";
import {StringLike} from "./types/string-like";

declare global {
    interface String {
        equals(other: StringLike): boolean;
    }
}

stringEquals.monkeyPatch = (): void => {
    safePrototypePatch(String, 'equals',
        function (other: StringLike) {
            return stringEquals(this, other);
        }
    );
}

export function stringEquals(thisString: StringLike, other: StringLike): boolean {
    return thisString.valueOf().normalize() === other.valueOf().normalize();
}