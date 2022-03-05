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

const doubler = n => n * 2;

const xs = [1, 2, 3, 4, 5, 6];
const ys = [-4, 2, -5, 10, -2, 1];


//`tan` Implemented and Tested.


// DEBUB

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
console.log(ys.pow(2));

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
