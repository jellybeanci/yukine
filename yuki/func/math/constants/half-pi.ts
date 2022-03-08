import {safePatch} from "../../../define-prototype";

export const HALF_PI: number = 1.5707963267948966;

declare global {
    interface Math {
        HALF_PI: number;
    }
}

export function monkeyPatch_HALF_PI() {
    safePatch(Math, "HALF_PI", HALF_PI);
}