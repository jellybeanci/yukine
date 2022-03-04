import {fastMap} from "./func/fast-map";
import {abs} from "./func/abs";
import {max} from "./func/max";
import {min} from "./func/min";
import {sum} from "./func/sum";
import {prod} from "./func/prod";
import {apply} from "./func/apply";
import {pow} from "./func/pow";
import {sqrt} from "./func/sqrt";
import {exp} from "./func/exp";
import {operation} from "./func/operation";
import {add} from "./func/add";
import {addBy} from "./func/add-by";
import {sub} from "./func/sub";
import {subBy} from "./func/sub-by";
import {subFrom} from "./func/sub-from";

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
// subFrom

const xs = [1, 2, 3, 4, 5, 6];
const ys = [-4, 2, -5, 10, -2, 0];

const doubler = n => n * 2;


console.log(subFrom(xs, 10));
console.log(subFrom(ys, 10));


/*
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

console.log(operation(xs, ys, (a, b) => a + b));
console.log(xs.operation(ys, (a, b) => a + b));

console.log(add(xs, ys));
console.log(xs.add(ys));

console.log(sub(xs, ys));
console.log(xs.sub(ys));

console.log(addBy(xs, 1));
console.log(addBy(ys, 1));

console.log(subBy(xs, 2));
console.log(subBy(ys, 2));

console.log(xs.subBy(2));
console.log(ys.subBy(2));
*/