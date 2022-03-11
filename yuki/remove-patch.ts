import {isDefined} from "./is-defined";

export function removePatch(target: object, propertyName: string): void {
    if (typeof target !== "object") return;
    isDefined(target[propertyName], propertyName, () => {
        delete target[propertyName];
    });
}