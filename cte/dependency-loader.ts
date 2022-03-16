const dependencies = [
    "../yuki/func/array/fast-map",
    "../yuki/func/array/abs",
    "../yuki/func/array/max",
    "../yuki/func/array/min",
    "../yuki/func/array/sum",
    "../yuki/func/array/prod",
    "../yuki/func/array/apply",
    "../yuki/func/array/pow",
    "../yuki/func/array/sqrt",
    "../yuki/func/array/exp",
    "../yuki/func/array/operation",
    "../yuki/func/array/add",
    "../yuki/func/array/add-by",
    "../yuki/func/array/sub",
    "../yuki/func/array/sub-by",
    "../yuki/func/array/sub-from",
    "../yuki/func/array/mult",
    "../yuki/func/array/mult-by",
    "../yuki/func/array/div",
    "../yuki/func/array/div-by",
    "../yuki/func/array/div-from",
    "../yuki/func/array/arrayCos",
    "../yuki/func/array/arrayTan",
    "../yuki/func/array/arraySin"
];

function* iterate(array) {
    for (let i = 0; i < array.length; i++) {
        yield import(array[i]);
    }
}

(async _ => {
    // for await (const dependency of iterate(dependencies)) {
    //     console.log(dependency)
    // }
    import("../ts/yuki/func/array/abs").then(loaded => {
        const method = Object.values(loaded)[0];
        method.monkeyPatch();
        console.log([-1, 3, -5, 20, -10].abs());
    })
})();
