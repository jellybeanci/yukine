const {randomRange} = require("../yuki/func/math/random-range");
const getRandomDegree = () => randomRange(-360, 360);
module.exports = {getRandomDegree};