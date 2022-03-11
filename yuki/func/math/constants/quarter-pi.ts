import {safePatch} from "../../../safe-patcher";

export const QUARTER_PI: number = 0.7853981633974483;

declare global {
    interface Math {
        QUARTER_PI: number;
    }
}

export function monkeyPatch_QUARTER_PI(): void {
    safePatch(Math, "QUARTER_PI", QUARTER_PI);
}