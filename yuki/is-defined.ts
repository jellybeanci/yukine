export function isDefined(prototypeObject: unknown, name: string, callback: () => void): void {
    if (typeof prototypeObject === "undefined") return callback();
    // console.log(`EXCESS DEFINE ON <${name}>`); // DEBUG ONLY
}