/**
 *
 * @param array {number[]}
 * @return number
 */
function avgFn(array) {
  const len = array.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += array[i];
  }
  return sum / len;
}
module.exports = {avgFn};