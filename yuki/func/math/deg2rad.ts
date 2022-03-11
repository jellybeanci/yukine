import {safePatch} from "../../safe-patcher";

const DEGREE_AS_RADIAN = 0.017453292519943295;

declare global {
    interface Math {
        deg2rad(degree: number): number;
    }
}

deg2rad.monkeyPatch = (): void => {
    safePatch(Math, "deg2rad",
        function (degree: number) {
            return deg2rad(degree);
        }
    );
}

export function deg2rad(degree: number): number {
    return degree * DEGREE_AS_RADIAN;
}