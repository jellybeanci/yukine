const dependencies = [
    "./func/array/fast-map",
    "./func/array/abs",
    "./func/array/max",
    "./func/array/min",
    "./func/array/sum",
    "./func/array/prod",
    "./func/array/apply",
    "./func/array/pow",
    "./func/array/sqrt",
    "./func/array/exp",
    "./func/array/operation",
    "./func/array/add",
    "./func/array/add-by",
    "./func/array/sub",
    "./func/array/sub-by",
    "./func/array/sub-from",
    "./func/array/mult",
    "./func/array/mult-by",
    "./func/array/div",
    "./func/array/div-by",
    "./func/array/div-from",
    "./func/array/arrayCos",
    "./func/array/arrayTan",
    "./func/array/arraySin"
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
    import("./func/array/abs").then(loaded => {
        const method = Object.values(loaded)[0];
        method.monkeyPatch();
        console.log([-1, 3, -5, 20, -10].abs());
    })
})();
