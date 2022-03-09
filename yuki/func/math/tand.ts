import {safePatch} from "../../define-prototype";
import {deg2rad} from "./deg2rad";

deg2rad.monkeyPatch();

declare global {
    interface Math {
        tand(x: number): number;
    }
}

tand.monkeyPatch = (): void => {
    safePatch(Math, "tand",
        function (x: number) {
            return tand(x);
        }
    );
}

export function tand(x: number) {
    return Math.tan(Math.deg2rad(x));
}