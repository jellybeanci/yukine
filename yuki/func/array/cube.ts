import {safePrototypePatch} from "../../define-prototype";

declare global {
    interface Array<T> {
        cube(): number[];
    }
}

cube.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'cube',
        function (initialValue?: number) {
            return cube(this);
        }
    );
}

export function cube(thisArray: number[]): number[] {
    return thisArray.fastMap(x => x * x * x);
}