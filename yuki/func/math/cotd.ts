import {safePatch} from "../../define-prototype";
import {cot} from "./cot";
import {deg2rad} from "./deg2rad";

cot.monkeyPatch();
deg2rad.monkeyPatch();

declare global {
    interface Math {
        cotd(x: number): number;
    }
}

cotd.monkeyPatch = (): void => {
    safePatch(Math, "cotd",
        function (x: number) {
            return cotd(x);
        }
    );
}

export function cotd(x: number) {
    return Math.cot(Math.deg2rad(x));
}