import {fastMap} from "../yuki/func/array/fast-map";
monkeyPatcher(fastMap)

const fizBuzz = [...Array(100)].fastMap((_, i) => i % 15 ? i % 5 ? i % 3 ? i : "fiz" : "buz" : "fizbuz");
console.log(fizBuzz)

interface MonkeyPatchLike {
    monkeyPatch(): void;
}

function monkeyPatcher(method: MonkeyPatchLike){
    method.monkeyPatch();
}