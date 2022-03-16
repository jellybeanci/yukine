import {safePatch} from "../../patch/safe-patcher";
import {removePatch} from "../../patch/remove-patch";

declare global {
    interface Math {
        cot(x: number): number;
    }
}

cot.monkeyPatch = (): void => {
    safePatch(Math, 'cot',
        function (x: number) {
            return cot(x);
        }
    );
}

cot.removePatch = (): void => {
    removePatch(Math, 'cot');
}

export function cot(x: number): number {
    return 1 / Math.tan(x);
}