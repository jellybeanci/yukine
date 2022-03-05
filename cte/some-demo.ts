function valueFactory(value: number) {
    return function () {
        console.log(`${value} evaluated!`);
        return value;
    }
}

const a = valueFactory(5);
const b = valueFactory(10);
const c = valueFactory(20);
const d = valueFactory(50);
const e = valueFactory(30);
const f = valueFactory(15);

const xm = [a, b, c, d, e, f];

const value = xm.some(x => x() > 5);
console.log(value);
