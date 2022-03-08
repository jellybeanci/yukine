import {safePatch} from "../../../define-prototype";

export const TWO_PI: number = 6.283185307179586;

declare global {
    interface Math {
        TWO_PI: number;
    }
}

export function monkeyPatch_TWO_PI() {
    safePatch(Math, "TWO_PI", TWO_PI);
}