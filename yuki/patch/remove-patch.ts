import {isDefined} from "../utils/is-defined";

export function removePatch(target: object, propertyName: string): void {
    if (target === undefined || target === null) return;
    if (!isDefined(target[propertyName])) {
        delete target[propertyName];
    }
}