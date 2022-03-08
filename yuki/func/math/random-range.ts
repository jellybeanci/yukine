import {safePatch} from "../../define-prototype";
import {randomRange as RANDOM_RANGE} from "@jellybeanci/random";

declare global {
    interface Math {
        randomRange(start: number, end?: number): number;
    }
}

randomRange.monkeyPatch = (): void => {
    safePatch(Math, "randomRange",
        function (start: number, end?: number) {
            return randomRange(start, end);
        }
    );
}

export function randomRange(start: number, end?: number) {
    return RANDOM_RANGE(start, end);
}