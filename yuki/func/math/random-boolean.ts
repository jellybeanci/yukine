import {safePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
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

randomBoolean.removePatch = (): void => {
    removePatch(Math, "randomBoolean");
}

export function randomBoolean(): boolean {
    return RANDOM_BOOLEAN();
}