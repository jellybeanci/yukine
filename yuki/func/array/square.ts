import {safePrototypePatch} from "../../define-prototype";

declare global {
    interface Array<T> {
        square(): number[];
    }
}

square.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'square',
        function (initialValue?: number) {
            return square(this);
        }
    );
}

export function square(thisArray: number[]): number[] {
    return thisArray.fastMap(x => x * x);
}