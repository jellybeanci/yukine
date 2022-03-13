import {safePrototypePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";

declare global {
    interface Number {
        isValid(): boolean;
    }
}

isValid.monkeyPatch = (): void => {
    safePrototypePatch(Number, 'isValid',
        function () {
            return isValid(this);
        }
    );
}

isValid.removePatch = (): void => {
    removePatch(Number, 'isValid');
}

export function isValid(thisNumber: number): boolean {
    return !Number.isNaN(thisNumber) && Number.isFinite(thisNumber);
}