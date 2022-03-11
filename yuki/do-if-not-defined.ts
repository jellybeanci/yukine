import {isDefined} from "./is-defined";

export function doIfNotDefined(property: unknown, name: string, callback: () => void): void {
    if (!isDefined(property)) return callback();
    // console.log(`EXCESS DEFINE ON <${name}>`); // DEBUG ONLY
}