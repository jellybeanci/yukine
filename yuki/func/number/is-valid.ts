import {safePrototypePatch} from "../../safe-patcher";

declare global {
    interface Number {
        isValid(): boolean;
    }
}

isValid.monkeyPatch = (): void => {
    safePrototypePatch(Number, "isValid",
        function () {
            return isValid(this);
        }
    );
}

export function isValid(thisNumber: number): boolean {
    return !Number.isNaN(thisNumber) && Number.isFinite(thisNumber);
}