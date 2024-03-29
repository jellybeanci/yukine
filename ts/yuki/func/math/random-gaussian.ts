import {safePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {randomGaussian as RANDOM_GAUSSIAN} from "@jellybeanci/random";

declare global {
    interface Math {
        randomGaussian(degree?: number): number;
    }
}

randomGaussian.monkeyPatch = (): void => {
    safePatch(Math, 'randomGaussian',
        function (degree?: number) {
            return randomGaussian(degree);
        }
    );
}

randomGaussian.removePatch = (): void => {
    removePatch(Math, 'randomGaussian');
}

export function randomGaussian(degree?: number): number {
    return RANDOM_GAUSSIAN(degree);
}