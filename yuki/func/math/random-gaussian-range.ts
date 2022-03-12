import {safePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {randomGaussianRange as RANDOM_GAUSSIAN_RANGE} from "@jellybeanci/random";

declare global {
    interface Math {
        randomGaussianRange(start: number, end?: number, degree?: number): number;
    }
}

randomGaussianRange.monkeyPatch = (): void => {
    safePatch(Math, 'randomGaussianRange',
        function (start: number, end?: number, degree?: number) {
            return randomGaussianRange(start, end, degree);
        }
    );
}

randomGaussianRange.removePatch = (): void => {
    removePatch(Math, 'randomGaussianRange');
}

export function randomGaussianRange(start: number, end?: number, degree?: number): number {
    return RANDOM_GAUSSIAN_RANGE(start, end, degree);
}