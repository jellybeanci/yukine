import {PrimitiveType} from "./func/array/types/primitive-type";
import {fastMap} from "./func/array/fast-map";
import {abs} from "./func/array/abs";
import {max} from "./func/array/max";
import {min} from "./func/array/min";
import {sum} from "./func/array/sum";
import {prod} from "./func/array/prod";
import {apply} from "./func/array/apply";
import {pow} from "./func/array/pow";
import {sqrt} from "./func/array/sqrt";
import {exp} from "./func/array/exp";
import {operation} from "./func/array/operation";
import {add} from "./func/array/add";
import {addBy} from "./func/array/add-by";
import {sub} from "./func/array/sub";
import {subBy} from "./func/array/sub-by";
import {subFrom} from "./func/array/sub-from";
import {mult} from "./func/array/mult";
import {multBy} from "./func/array/mult-by";
import {div} from "./func/array/div";
import {divBy} from "./func/array/div-by";
import {divFrom} from "./func/array/div-from";
import {sin} from "./func/array/sin";
import {cos} from "./func/array/cos";
import {tan} from "./func/array/tan";
import {arrayEquals} from "./func/array/array-equals";
import {deepEquals} from "./func/array/deep-equals";
import {swap} from "./func/array/swap";
import {zip} from "./func/array/zip";
import {binarize} from "./func/array/binarize";
import {toInt} from "./func/array/to-int";
import {square} from "./func/array/square";
import {cube} from "./func/array/cube";
import {mod} from "./func/array/mod";
import {round} from "./func/array/round";
import {ceil} from "./func/array/ceil";
import {floor} from "./func/array/floor";
import {cbrt} from "./func/array/cbrt";
import {stringEquals} from "./func/string/string-equals";
import {deg2rad} from "./func/math/deg2rad";
import {QUARTER_PI} from "./func/math/constants/quarter-pi";
import {defineConstants} from "./func/math/define-constants";
import {HALF_PI} from "./func/math/constants/half-pi";
import {TWO_PI} from "./func/math/constants/two-pi";
import {randomRange} from "./func/math/random-range";
import {rad2deg} from "./func/math/rad2deg";

fastMap.monkeyPatch();
abs.monkeyPatch();
max.monkeyPatch();
min.monkeyPatch();
sum.monkeyPatch();
prod.monkeyPatch();
apply.monkeyPatch();
pow.monkeyPatch();
sqrt.monkeyPatch();
exp.monkeyPatch();
operation.monkeyPatch();
add.monkeyPatch();
addBy.monkeyPatch();
sub.monkeyPatch();
subBy.monkeyPatch();
subFrom.monkeyPatch();
mult.monkeyPatch();
multBy.monkeyPatch();
div.monkeyPatch();
divBy.monkeyPatch();
divFrom.monkeyPatch();
sin.monkeyPatch();
cos.monkeyPatch();
tan.monkeyPatch();
arrayEquals.monkeyPatch();
deepEquals.monkeyPatch();
swap.monkeyPatch();
zip.monkeyPatch();
binarize.monkeyPatch();
toInt.monkeyPatch();
square.monkeyPatch();
cube.monkeyPatch();
mod.monkeyPatch();
round.monkeyPatch();
ceil.monkeyPatch();
floor.monkeyPatch();
cbrt.monkeyPatch();
stringEquals.monkeyPatch();
deg2rad.monkeyPatch();
defineConstants.monkeyPatch();
randomRange.monkeyPatch();

const doubler = n => n * 2;

const xs = [1, 2, 3, 4, 5, 6];
const ys = [-4, 2, -5, 10, -2, 1];

const zs = [1, 2, 3, 4, 5, 6];

const hs = [1, 8, 27, 64, 125, 216, 343, 512];

const ks = [1.2, 2.3, 3.4, 4.5, -5.6, 0];

const ls = [1, 2, 3, [4, 5], 6, 7];
const ms = [1, 2, 3, [4, 5], 6, 7];

const zfs: PrimitiveType[][] = [
    ["a", 1, "x"],
    ["b", 2, "y"],
    ["c", 3, "z"]
];

const bitStr = [true, false, false, true, false, false, false, false, true, true, false, true];
const garbageArray = [true, 1, 0, "", NaN, Infinity, 5000, 42, "meaning of life"];

const s1 = '\u00F1'; // ñ
const s2 = '\u006E\u0303'; // ñ = n + ̃

const str1 = new String("Ohh, Hi Mark!");
const str2 = new String("Ohh, Hi Mark!");

console.log(rad2deg(Math.PI))
console.log(rad2deg(Math.TWO_PI))
console.log(rad2deg(Math.HALF_PI))
console.log(rad2deg(Math.QUARTER_PI))
console.log(rad2deg(Math.HALF_PI + Math.QUARTER_PI))

console.log("~~~")

console.log(rad2deg(deg2rad(90)))
console.log(rad2deg(deg2rad(136)))
console.log(rad2deg(deg2rad(42)))


// DEBUG
/*
console.log(fastMap(xs, doubler))
console.log(xs.fastMap(doubler))

console.log("xs:", abs(xs))
console.log("ys:", abs(ys))

console.log("xs:", xs.abs())
console.log("ys:", ys.abs())

console.log(max(xs))
console.log(max(ys))

console.log(xs.max())
console.log(ys.max())

console.log(min(xs))
console.log(min(ys))

console.log(xs.min())
console.log(ys.min())

console.log(sum(xs))
console.log(sum(ys))

console.log(xs.sum())
console.log(ys.sum())

console.log(sum(xs, 5))
console.log(sum(ys, 5))

console.log(xs.sum())
console.log(ys.sum(5))

console.log([].sum())

console.log(prod(xs))
console.log(prod(ys))

console.log(xs.prod())
console.log(ys.prod())

console.log([].prod())

console.log(apply(xs, 5, (a, b) => a + b))
console.log(xs.apply(5, (a, b) => a + b))

console.log(apply(ys, 5, (a, b) => a * b))
console.log(xs.apply(5, (a, b) => a * b))

console.log(apply(ys, 5, (a, b) => b / a))
console.log(ys.apply(5, (a, b) => b / a))

console.log(pow(xs, 2))
console.log(xs.pow(2))

console.log(pow(ys, 2))
console.log(ys.pow(2))

console.log(sqrt(xs))
console.log(sqrt(ys))

console.log(xs.sqrt())
console.log(ys.sqrt())

console.log(exp(xs))
console.log(exp(ys))

console.log(xs.exp())
console.log(ys.exp())

console.log(operation(xs, ys, (a, b) => a + b))
console.log(xs.operation(ys, (a, b) => a + b))

console.log(add(xs, ys))
console.log(xs.add(ys))

console.log(sub(xs, ys))
console.log(xs.sub(ys))

console.log(addBy(xs, 1))
console.log(addBy(ys, 1))

console.log(xs.addBy(15))
console.log(ys.addBy(3))

console.log(subBy(xs, 2))
console.log(subBy(ys, 2))

console.log(xs.subBy(2))
console.log(ys.subBy(2))

console.log(subFrom(xs, 10))
console.log(subFrom(ys, 10))

console.log(xs.subFrom(10))
console.log(ys.subFrom(10))

console.log(mult(xs, ys))
console.log(xs.mult(ys))

console.log(multBy(xs, 3))
console.log(multBy(ys, 7))

console.log(div(xs, ys))
console.log(div(ys, xs))

console.log(xs.div(ys))
console.log(ys.div(xs))
console.log(xs.div(xs))

console.log(divBy(xs, 5))
console.log(divBy(ys, 3))

console.log(xs.divBy(5))
console.log(ys.divBy(3))

console.log(divFrom(xs,4))
console.log(divFrom(ys,-5))

console.log(xs.divFrom(4))
console.log(ys.divFrom(-5))

console.log(sin(xs))
console.log(sin(ys))

console.log(xs.sin())
console.log(ys.sin())

console.log(cos(xs))
console.log(cos(ys))

console.log(xs.cos())
console.log(ys.cos())

console.log(xs.cos().pow(2).add(xs.sin().pow(2)))

console.log(tan(xs))
console.log(tan(ys))

console.log(xs.tan())
console.log(ys.tan())

console.log(xs.sin().div(xs.cos()).div(xs.tan())) // sinx / cosx * tanx = 1

console.log("arrayEquals:", arrayEquals(xs, ys), "\t===:", xs === ys)
console.log("arrayEquals:", arrayEquals(ys, zs), "\t===:", ys === zs)
console.log("arrayEquals:", arrayEquals(zs, xs), "\t===:", zs === xs)
console.log("~~~~")
console.log("arrayEquals:", xs.equals(ys), "\t===:", xs === ys)
console.log("arrayEquals:", ys.equals(zs), "\t===:", ys === zs)
console.log("arrayEquals:", zs.equals(xs), "\t===:", zs === xs)

console.log("===:", ls === ms)
console.log("deepEquals:", deepEquals(ls, ms))
console.log("Array.deepEquals:", ls.deepEquals(ms))

console.log("xs, before swap:", xs)
swap(xs, 0, 1)
console.log("xs, after swap: ", xs)

console.log("ls, before swap:", ls)
swap(ls, 3, 0)
console.log("ls, after swap: ", ls)

console.log("xs, before swap:", xs)
xs.swap(0, 1)
console.log("xs, after swap: ", xs)

console.log(zfs)
console.log(zip(zfs))
console.log(zfs.zip())

console.log("bitStr:", binarize(bitStr))
console.log("garbageArray:", binarize(garbageArray))

console.log("bitStr:", bitStr.binarize())
console.log("garbageArray:", garbageArray.binarize())

console.log(toInt(ks))
console.log(toInt(ks.multBy(Math.PI)))

console.log(ks.toInt())
console.log(ks.multBy(Math.PI).toInt())

console.log(square(xs))
console.log(xs.square())

console.log(cube(xs))
console.log(xs.cube())

console.log(mod(xs, 3))
console.log(xs.mod(3))

console.log(round(ks))
console.log(ks.round())

console.log(ceil(ks))
console.log(ks.ceil())

console.log(floor(ks))
console.log(ks.floor())

console.log(cbrt(hs))
console.log(hs.cbrt())

console.log("str1:", str1, "str2:", str2)
console.log("str1 === str2:", str1 === str2)
console.log("stringEquals(str1, str2):", stringEquals(str1, str2))
console.log("str1.equals(str2):", str1.equals(str2))

console.log("~~~~~")

console.log("s1:", s1, "s2:", s2)
// @ts-ignore
console.log("s1 === s2:", s1 === s2)
console.log("stringEquals(s1, s2):", stringEquals(s1, s2))
console.log("s1.equals(s2):", s1.equals(s2))

console.log(deg2rad(90))
console.log(deg2rad(180))
console.log(deg2rad(-45))
console.log(deg2rad(270))

console.log("~~~~")

console.log(Math.deg2rad(90))
console.log(Math.deg2rad(180))
console.log(Math.deg2rad(-45))
console.log(Math.deg2rad(270))

console.log(QUARTER_PI)
console.log(Math.QUARTER_PI)

console.log(HALF_PI)
console.log(Math.HALF_PI)

console.log(TWO_PI)
console.log(Math.TWO_PI)

console.log(randomRange(69, 420))
console.log(Math.randomRange(69, 420))
*/

/*
```js

```

```console

```
 */

/*
Implement `mod` method into `Array<T>` prototype.
*/

/*
Implemented with commit .
 */