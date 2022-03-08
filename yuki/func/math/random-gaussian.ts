import {safePatch} from "../../define-prototype";
import {randomGaussian as RANDOM_GAUSSIAN} from "@jellybeanci/random";

declare global {
    interface Math {
        randomGaussian(degree?: number): number;
    }
}

randomGaussian.monkeyPatch = (): void => {
    safePatch(Math, "randomGaussian",
        function (degree?: number) {
            return randomGaussian(degree);
        }
    );
}

export function randomGaussian(degree?: number) {
    return RANDOM_GAUSSIAN(degree);
}