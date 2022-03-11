import {safePatch} from "../../safe-patcher";
import {deg2rad} from "./deg2rad";

deg2rad.monkeyPatch();

declare global {
    interface Math {
        cosd(x: number): number;
    }
}

cosd.monkeyPatch = (): void => {
    safePatch(Math, "cosd",
        function (x: number) {
            return cosd(x);
        }
    );
}

export function cosd(x: number): number {
    return Math.cos(Math.deg2rad(x));
}