import {safePrototypePatch} from "../../define-prototype";

declare global {
    interface Array<T> {
        prod(initialValue?: number): number;
    }
}

prod.monkeyPatch = (): void => {
    safePrototypePatch(Array, 'prod',
        function (initialValue?: number) {
            return prod(this, initialValue);
        }
    );
}

export function prod(thisArray: number[], initialValue = 1): number {
    for (let i = 0, len = thisArray.length; i < len; i++) {
        initialValue *= thisArray[i];
    }
    return initialValue
}