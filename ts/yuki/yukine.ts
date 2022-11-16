import {Monkey} from "./types/monkey";
import {fastMap} from "./func/array/fast-map";
import {apply} from "./func/array/apply";
import {abs} from "./func/array/abs";
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
import {sum} from "./func/array/sum";
import {prod} from "./func/array/prod";
import {avg} from "./func/array/avg";
import {sqrt} from "./func/array/sqrt";
import {cbrt} from "./func/array/cbrt";
import {floor} from "./func/array/floor";
import {ceil} from "./func/array/ceil";
import {round} from "./func/array/round";
import {min} from "./func/array/min";
import {max} from "./func/array/max";
import {mod} from "./func/array/mod";
import {exp} from "./func/array/exp";
import {pow} from "./func/array/pow";
import {arraySquare} from "./func/array/array-square";
import {arrayCube} from "./func/array/array-cube";
import {arraySin} from "./func/array/array-sin";
import {arraySind} from "./func/array/array-sind";
import {arrayCos} from "./func/array/array-cos";
import {arrayCosd} from "./func/array/array-cosd";
import {arrayTan} from "./func/array/array-tan";
import {arrayTand} from "./func/array/array-tand";
import {arrayTanh} from "./func/array/array-tanh";
import {arrayCot} from "./func/array/array-cot";
import {arrayCotd} from "./func/array/array-cotd";
import {arrayLog} from "./func/array/array-log";
import {arrayLog10} from "./func/array/array-log10";
import {zip} from "./func/array/zip";
import {swap} from "./func/array/swap";
import {toInt} from "./func/array/to-int";
import {binarize} from "./func/array/binarize";
import {toBitString} from "./func/array/to-bit-string";
import {arrayEquals} from "./func/array/array-equals";
import {deepEquals} from "./func/array/deep-equals";
import {defineConstants} from "./func/math/define-constants";
import {sind} from "./func/math/sind";
import {cosd} from "./func/math/cosd";
import {tand} from "./func/math/tand";
import {cot} from "./func/math/cot";
import {cotd} from "./func/math/cotd";
import {square} from "./func/math/square";
import {cube} from "./func/math/cube";
import {deg2rad} from "./func/math/deg2rad";
import {rad2deg} from "./func/math/rad2deg";
import {randomBoolean} from "./func/math/random-boolean";
import {randomGaussian} from "./func/math/random-gaussian";
import {randomGaussianRange} from "./func/math/random-gaussian-range";
import {randomInt} from "./func/math/random-int";
import {randomRange} from "./func/math/random-range";
import {isValid} from "./func/number/is-valid";
import {numberEquals} from "./func/number/number-equals";
import {stringEquals} from "./func/string/string-equals";
import {stddev} from "./func/array/stddev";
import {randomItem} from "./func/array/random-item";
import {variance} from "./func/array/variance";

const monkeys: readonly Monkey[] = [
    fastMap,
    apply,
    operation,
    abs,
    add,
    addBy,
    sub,
    subBy,
    subFrom,
    mult,
    multBy,
    div,
    divBy,
    divFrom,
    sum,
    prod,
    avg,
    sqrt,
    cbrt,
    floor,
    ceil,
    round,
    min,
    max,
    mod,
    exp,
    pow,
    arraySquare,
    arrayCube,
    arraySin,
    arraySind,
    arrayCos,
    arrayCosd,
    arrayTan,
    arrayTand,
    arrayTanh,
    arrayCot,
    arrayCotd,
    arrayLog,
    arrayLog10,
    zip,
    swap,
    toInt,
    binarize,
    toBitString,
    arrayEquals,
    deepEquals,
    defineConstants,
    sind,
    cosd,
    cot,
    cotd,
    tand,
    square,
    cube,
    deg2rad,
    rad2deg,
    randomBoolean,
    randomGaussian,
    randomGaussianRange,
    randomInt,
    randomRange,
    isValid,
    numberEquals,
    stringEquals,
    randomItem,
    stddev,
    variance
];

export function activateIt() {
    for (const monkey of monkeys) {
        monkey.monkeyPatch();
    }
}

export function deactivateIt() {
    for (const monkey of monkeys) {
        monkey.removePatch();
    }
}