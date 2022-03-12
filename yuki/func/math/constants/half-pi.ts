import {safePatch} from "../../../safe-patcher";
import {removePatch} from "../../../remove-patch";

export const HALF_PI: number = 1.5707963267948966;

declare global {
    interface Math {
        HALF_PI: number;
    }
}

export function monkeyPatch_HALF_PI(): void {
    safePatch(Math, "HALF_PI", HALF_PI);
}

export function removePatch_HALF_PI(): void {
    removePatch(Math, "HALF_PI");
}