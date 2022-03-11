export function isDefined(property: unknown, name: string, callback: () => void): void {
    if (typeof property === "undefined") return callback();
    // console.log(`EXCESS DEFINE ON <${name}>`); // DEBUG ONLY
}