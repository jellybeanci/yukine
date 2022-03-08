import {safePatch} from "../../define-prototype";

declare global {
    interface Math {
        square(x: number): number;
    }
}

square.monkeyPatch = (): void => {
    safePatch(Math, "square",
        function (x: number) {
            return square(x);
        }
    );
}

export function square(x: number) {
    return x * x;
}