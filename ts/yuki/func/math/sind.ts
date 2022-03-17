import {safePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";
import {deg2rad} from "./deg2rad";

deg2rad.monkeyPatch();

declare global {
    interface Math {
        sind(x: number): number;
    }
}

sind.monkeyPatch = (): void => {
    safePatch(Math, 'sind',
        function (x: number) {
            return sind(x);
        }
    );
}

sind.removePatch = (): void => {
    removePatch(Math, 'sind');
}

export function sind(x: number): number {
    return Math.sin(Math.deg2rad(x));
}