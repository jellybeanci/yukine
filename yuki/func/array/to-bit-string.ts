import {binarize} from "./binarize";
import {removePatch} from "../../remove-patch";
import {safePrototypePatch} from "../../safe-patcher";

binarize.monkeyPatch();

declare global {
    interface Array<T> {
        toBitString(seperator?: string): string;
    }
}

toBitString.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'toBitString',
        function (seperator?: string) {
            return toBitString(this, seperator);
        }
    );
}

toBitString.removePatch = (): void => {
    removePatch(Array.prototype, 'toBitString');
}

export function toBitString(thisArray: any[], seperator: string = ""): string {
    return thisArray.binarize().join(seperator);
}