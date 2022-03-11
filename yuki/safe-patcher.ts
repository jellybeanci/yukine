import {doIfNotDefined} from "./do-if-not-defined";

interface HasPrototype {
    prototype: any[] | String | Number;
}

type ValueMember = string | number | bigint | boolean | symbol | Function;

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