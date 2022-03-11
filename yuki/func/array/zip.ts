import {safePrototypePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {PrimitiveType} from "./types/primitive-type";

declare global {
    interface Array<T> {
        zip(): T[];
    }
}

zip.monkeyPatch = (): void => {
    safePrototypePatch(Array, "zip",
        function () {
            return zip(this);
        }
    );
}

zip.removePatch = (): void => {
    removePatch(Array.prototype, 'zip');
}

export function zip(thisArray: PrimitiveType[][]): PrimitiveType[][] {
    const rowSize = thisArray.length;
    const colSize = thisArray[0].length;
    const zip: PrimitiveType[][] = Array(colSize);
    for (let i = 0; i < colSize; i++) {
        const col = Array(rowSize);
        for (let j = 0; j < rowSize; j++) {
            col[j] = thisArray[j][i];
        }
        zip[i] = col;
    }
    return zip;
}