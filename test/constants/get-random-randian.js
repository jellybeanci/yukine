const {randomRange} = require("../yuki/func/math/random-range");
const {TWO_PI} = require("../yuki/func/math/constants/two-pi");
const getRandomRadian = () => randomRange(-TWO_PI, TWO_PI);
module.exports = {getRandomRadian};