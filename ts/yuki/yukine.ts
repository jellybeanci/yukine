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
import {arraySin} from "./func/array/array-sin";
import {arrayCos} from "./func/array/array-cos";
import {arrayTan} from "./func/array/array-tan";
import {arrayEquals} from "./func/array/array-equals";
import {deepEquals} from "./func/array/deep-equals";
import {swap} from "./func/array/swap";
import {zip} from "./func/array/zip";
import {binarize} from "./func/array/binarize";
import {toInt} from "./func/array/to-int";
import {arraySquare} from "./func/array/array-square";
import {arrayCube} from "./func/array/array-cube";
import {mod} from "./func/array/mod";
import {round} from "./func/array/round";
import {ceil} from "./func/array/ceil";
import {floor} from "./func/array/floor";
import {cbrt} from "./func/array/cbrt";
import {stringEquals} from "./func/string/string-equals";
import {deg2rad} from "./func/math/deg2rad";
import {QUARTER_PI} from "./func/math/constants/quarter-pi";
import {HALF_PI} from "./func/math/constants/half-pi";
import {TWO_PI} from "./func/math/constants/two-pi";
import {randomRange} from "./func/math/random-range";
import {rad2deg} from "./func/math/rad2deg";
import {randomGaussian} from "./func/math/random-gaussian";
import {randomGaussianRange} from "./func/math/random-gaussian-range";
import {randomBoolean} from "./func/math/random-boolean";
import {randomInt} from "./func/math/random-int";
import {cot} from "./func/math/cot";
import {cotd} from "./func/math/cotd";
import {cube} from "./func/math/cube";
import {square} from "./func/math/square";
import {numberEquals} from "./func/number/number-equals";
import {sind} from "./func/math/sind";
import {cosd} from "./func/math/cosd";
import {tand} from "./func/math/tand";
import {arrayCot} from "./func/array/array-cot";
import {isValid} from "./func/number/is-valid";
import {arraySind} from "./func/array/array-sind";
import {arrayCosd} from "./func/array/array-cosd";
import {arrayTand} from "./func/array/array-tand";
import {arrayCotd} from "./func/array/array-cotd";
import {toBitString} from "./func/array/to-bit-string";
import {patchFactory} from "./dynamic-import";
import {Patch} from "./enums/patch";
import {avg} from "./func/array/avg";

(async _ => {
    const patcher = await patchFactory();
    patcher(Patch.ACTIVATE);


    const doubler = n => n * 2;

    const xs = [1, 2, 3, 4, 5, 6];
    const ys = [-4, 2, -5, 10, -2, 1];

    const zs = [1, 2, 3, 4, 5, 6];

    const hs = [1, 8, 27, 64, 125, 216, 343, 512];

    const ks = [1.2, 2.3, 3.4, 4.5, -5.6, 0];

    const ls = [1, 2, 3, [4, 5], 6, 7];
    const ms = [1, 2, 3, [4, 5], 6, 7];

    const ns = [15, 30, 45, 60, 90, 135, 210];

    const zfs: PrimitiveType[][] = [
        ["a", 1, "x"],
        ["b", 2, "y"],
        ["c", 3, "z"]
    ];

    const bStr = [true, false, false, true, true, true, true, false, false, true];
    const bitStr = [true, false, false, true, false, false, false, false, true, true, false, true];
    const garbageArray = [true, 1, 0, "", NaN, Infinity, 5000, 42, "meaning of life"];

    const s1 = '\u00F1'; // ñ
    const s2 = '\u006E\u0303'; // ñ = n + ̃

    const str1 = new String("Ohh, Hi Mark!");
    const str2 = new String("Ohh, Hi Mark!");

    console.log(ks, ks.avg())

    /*
    // DEBUG

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

    console.log(divFrom(xs, 4))
    console.log(divFrom(ys, -5))

    console.log(xs.divFrom(4))
    console.log(ys.divFrom(-5))

    console.log(arraySin(xs))
    console.log(arraySin(ys))

    console.log(xs.sin())
    console.log(ys.sin())

    console.log(arrayCos(xs))
    console.log(arrayCos(ys))

    console.log(xs.cos())
    console.log(ys.cos())

    console.log(xs.cos().pow(2).add(xs.sin().pow(2)))

    console.log(arrayTan(xs))
    console.log(arrayTan(ys))

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

    console.log(arraySquare(xs))
    console.log(xs.square())

    console.log(arrayCube(xs))
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

    console.log(rad2deg(Math.PI))
    console.log(rad2deg(Math.TWO_PI))
    console.log(rad2deg(Math.HALF_PI))
    console.log(rad2deg(Math.QUARTER_PI))
    console.log(rad2deg(Math.HALF_PI + Math.QUARTER_PI))

    console.log("~~~")

    console.log(rad2deg(deg2rad(90)))
    console.log(rad2deg(deg2rad(136)))
    console.log(rad2deg(deg2rad(42)))

    console.log(randomGaussian())
    console.log(randomGaussian(5))
    console.log(Math.randomGaussian())
    console.log(Math.randomGaussian(5))

    console.log(randomGaussianRange(5, 20))
    console.log(randomGaussianRange(5, 20, 3))
    console.log(Math.randomGaussianRange(5, 20))
    console.log(Math.randomGaussianRange(5, 20, 5))

    console.log(randomBoolean())
    console.log(randomBoolean())
    console.log(Math.randomBoolean())
    console.log(Math.randomBoolean())

    console.log(randomInt(10, 20))
    console.log(randomInt(-5, 5))
    console.log(Math.randomInt(10, 20))
    console.log(Math.randomInt(-5, 5))

    console.log(cot(Math.QUARTER_PI))
    console.log(cot(Math.HALF_PI))
    console.log(cot(Math.HALF_PI + Math.QUARTER_PI))

    console.log(Math.cot(Math.QUARTER_PI))
    console.log(Math.cot(Math.HALF_PI))
    console.log(Math.cot(Math.HALF_PI + Math.QUARTER_PI))

    console.log(cotd(90))
    console.log(cotd(45))
    console.log(cotd(60))

    console.log(Math.cotd(90))
    console.log(Math.cotd(45))
    console.log(Math.cotd(60))

    console.log(square(16))
    console.log(Math.square(16))

    console.log(cube(3))
    console.log(Math.cube(3))

    console.log(numberEquals(0, 1e-15, 1e-5))
    console.log(numberEquals(0, 1e-150))
    console.log(numberEquals(5, 5.005, 0.2))

    console.log("~~~~")

    const x = 0;
    const y = 5;
    console.log(x.equals(1e-15, 1e-5))
    console.log(x.equals(1e-150))
    console.log(y.equals(5.005, 0.2))

    console.log(sind(90))
    console.log(sind(45))
    console.log(sind(30))
    console.log(sind(60))

    console.log("~~~~")

    console.log(Math.sind(90))
    console.log(Math.sind(45))
    console.log(Math.sind(30))
    console.log(Math.sind(60))

    console.log(cosd(90))
    console.log(cosd(45))
    console.log(cosd(30))
    console.log(cosd(60))

    console.log("~~~~")

    console.log(Math.cosd(90))
    console.log(Math.cosd(45))
    console.log(Math.cosd(30))
    console.log(Math.cosd(60))

    console.log(tand(45))
    console.log(tand(30))
    console.log(tand(60))

    console.log("~~~~")

    console.log(Math.tand(45))
    console.log(Math.tand(30))
    console.log(Math.tand(60))

    console.log(arrayCot(xs))
    console.log(arrayCot(ys))

    console.log("~~~~")

    console.log(xs.cot())
    console.log(ys.cot())

// @ts-ignore
    const watashi = "Göksel" / "Küçükşahin";
    const questionable = 0 / 0;
    const myAwesomeness = 1 / 0;
    const negativeZero = -0;
    const zubizeratta = -420 / 0;

    console.log("watashi:", watashi, "isValid:", isValid(watashi), "prototype:", watashi.isValid())
    console.log("questionable:", questionable, "isValid:", isValid(questionable), "prototype:", questionable.isValid())
    console.log("myAwesomeness:", myAwesomeness, "isValid:", isValid(myAwesomeness), "prototype:", myAwesomeness.isValid())
    console.log("negativeZero:", negativeZero, "isValid:", isValid(negativeZero), "prototype:", negativeZero.isValid())
    console.log("zubizeratta:", zubizeratta, "isValid:", isValid(zubizeratta), "prototype:", zubizeratta.isValid())

    console.log(arraySind(ns))
    console.log(ns.sind())

    console.log(arrayCosd(ns))
    console.log(ns.cosd())

    console.log(arrayTand(ns))
    console.log(ns.tand())

    console.log(arrayCotd(ns))
    console.log(ns.cotd())

    console.log(toBitString(bStr))
    console.log(toBitString(bitStr))
    console.log(toBitString(garbageArray))
    console.log(toBitString(bitStr, ", "))

    console.log(bStr.toBitString())
    console.log(bitStr.toBitString())
    console.log(garbageArray.toBitString())
    console.log(bitStr.toBitString(", "))
*/
})();