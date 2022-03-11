import {safePrototypePatch} from "../../safe-patcher";

declare global {
    interface Number {
        equals(number: number, epsilon?: number): boolean;
    }
}

numberEquals.monkeyPatch = (): void => {
    safePrototypePatch(Number, "equals",
        function (number: number, epsilon: number = Number.EPSILON) {
            return numberEquals(this, number, epsilon);
        }
    );
}

export function numberEquals(thisNumber: number, other: number, epsilon: number = Number.EPSILON): boolean {
    return Math.abs(thisNumber - other) < Math.abs(epsilon);
}