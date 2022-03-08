import {safePatch} from "../../define-prototype";

declare global {
    interface Math {
        cot(x: number): number;
    }
}

cot.monkeyPatch = (): void => {
    safePatch(Math, "cot",
        function (x: number) {
            return cot(x);
        }
    );
}

export function cot(x: number) {
    return 1 / Math.tan(x);
}