interface HasPrototype {
    prototype: any[] | String | Number;
}

type ValueMember = string | number | bigint | boolean | symbol | Function;

function isDefined(prototypeObject: unknown, name: string, callback: () => void): void {
    if (typeof prototypeObject === "undefined") return callback();
    // console.log(`EXCESS DEFINE ON <${name}>`); // DEBUG ONLY
}

export function safePrototypePatch(target: HasPrototype, name: string, value: ValueMember): void {
    isDefined(target.prototype[name], name, () => {
        Object.defineProperty(target.prototype, name, {
            value: value, enumerable: false, configurable: true, writable: true
        });
    });
}