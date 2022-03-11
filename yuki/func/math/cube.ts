import {safePatch} from "../../safe-patcher";

declare global {
    interface Math {
        cube(x: number): number;
    }
}

cube.monkeyPatch = (): void => {
    safePatch(Math, "cube",
        function (x: number) {
            return cube(x);
        }
    );
}

export function cube(x: number): number {
    return x * x * x;
}