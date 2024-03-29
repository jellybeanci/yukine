import {safePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {randomInt as RANDOM_INT} from "@jellybeanci/random";

declare global {
    interface Math {
        randomInt(start: number, end?: number): number;
    }
}

randomInt.monkeyPatch = (): void => {
    safePatch(Math, 'randomInt',
        function (start: number, end?: number) {
            return randomInt(start, end);
        }
    );
}

randomInt.removePatch = (): void => {
    removePatch(Math, 'randomInt');
}

export function randomInt(start: number, end?: number): number {
    return RANDOM_INT(start, end);
}