import {safePatch} from "../../safe-patcher";
import {randomBoolean as RANDOM_BOOLEAN} from "@jellybeanci/random";

declare global {
    interface Math {
        randomBoolean(): boolean;
    }
}

randomBoolean.monkeyPatch = (): void => {
    safePatch(Math, "randomBoolean",
        function () {
            return randomBoolean();
        }
    );
}

export function randomBoolean(): boolean {
    return RANDOM_BOOLEAN();
}