import {isDefined} from "../utils/is-defined";

interface HasPrototype {
    prototype: any[] | String | Number;
}

type ValueMember = string | number | bigint | boolean | symbol | Function;

function doIfNotDefined(property: unknown, name: string, callback: () => void): void {
    if (!isDefined(property)) return callback();
    // console.log(`EXCESS DEFINE ON <${name}>`); // DEBUG ONLY
}

export function safePrototypePatch(target: HasPrototype, name: string, value: ValueMember): void {
    safePatch(target.prototype, name, value);
}

export function safePatch(target: object, name: string, value: ValueMember): void {
    doIfNotDefined(target[name], name, () => {
        Object.defineProperty(target, name, {
            value: value, enumerable: false, configurable: true, writable: true
        });
    });
}