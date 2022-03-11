import {safePrototypePatch} from "../../safe-patcher";

declare global {
    interface Array<T> {
        mod(modulo: number): number[];
    }
}

mod.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'mod',
        function (modulo: number) {
            return mod(this, modulo);
        }
    );
}

export function mod(thisArray: number[], modulo: number): number[] {
    return thisArray.fastMap(x => x % modulo);
}