import {safePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";

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

rad2deg.removePatch = (): void => {
    removePatch(Math, "rad2deg");
}

export function rad2deg(radian: number): number {
    return radian * RADIAN_AS_DEGREE;
}