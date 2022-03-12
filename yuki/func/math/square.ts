import {safePatch} from "../../safe-patcher";
import {removePatch} from "../../remove-patch";

declare global {
    interface Math {
        square(x: number): number;
    }
}

square.monkeyPatch = (): void => {
    safePatch(Math, 'square',
        function (x: number) {
            return square(x);
        }
    );
}

square.removePatch = (): void => {
    removePatch(Math, 'square');
}

export function square(x: number): number {
    return x * x;
}