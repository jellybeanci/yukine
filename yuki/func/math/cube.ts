import {safePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";

declare global {
    interface Math {
        cube(x: number): number;
    }
}

cube.monkeyPatch = (): void => {
    safePatch(Math, 'cube',
        function (x: number) {
            return cube(x);
        }
    );
}

cube.removePatch = (): void => {
    removePatch(Math, 'cube');
}

export function cube(x: number): number {
    return x * x * x;
}