import {safePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";

const DEGREE_AS_RADIAN = 0.017453292519943295;

declare global {
    interface Math {
        deg2rad(degree: number): number;
    }
}

deg2rad.monkeyPatch = (): void => {
    safePatch(Math, 'deg2rad',
        function (degree: number) {
            return deg2rad(degree);
        }
    );
}

deg2rad.removePatch = (): void => {
    removePatch(Math, 'deg2rad');
}

export function deg2rad(degree: number): number {
    return degree * DEGREE_AS_RADIAN;
}