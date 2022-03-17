import {safePatch} from "../../../patch/safe-patcher";
import {removePatch} from "../../../patch/remove-patch";

export const QUARTER_PI: number = 0.7853981633974483;

declare global {
    interface Math {
        QUARTER_PI: number;
    }
}

export function monkeyPatch_QUARTER_PI(): void {
    safePatch(Math, 'QUARTER_PI', QUARTER_PI);
}

export function removePatch_QUATER_PI(): void {
    removePatch(Math, 'QUARTER_PI');
}