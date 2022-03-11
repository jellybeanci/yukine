import {safePatch} from "../../safe-patcher";

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

export function square(x: number): number {
    return x * x;
}