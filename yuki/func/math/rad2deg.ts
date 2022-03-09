import {safePatch} from "../../define-prototype";

const RADIAN_AS_DEGREE = 57.29577951308232;

declare global {
    interface Math {
        rad2deg(radian: number): number;
    }
}

rad2deg.monkeyPatch = (): void => {
    safePatch(Math, "rad2deg",
        function (radian: number) {
            return rad2deg(radian);
        }
    );
}

export function rad2deg(radian: number): number {
    return radian * RADIAN_AS_DEGREE;
}