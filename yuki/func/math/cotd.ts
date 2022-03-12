import {safePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";
import {deg2rad} from "./deg2rad";
import {cot} from "./cot";

cot.monkeyPatch();
deg2rad.monkeyPatch();

declare global {
    interface Math {
        cotd(x: number): number;
    }
}

cotd.monkeyPatch = (): void => {
    safePatch(Math, 'cotd',
        function (x: number) {
            return cotd(x);
        }
    );
}

cotd.removePatch = (): void => {
    removePatch(Math, 'cotd');
}

export function cotd(x: number): number {
    return Math.cot(Math.deg2rad(x));
}