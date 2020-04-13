/* eslint-disable no-bitwise */
function getBit(n, i) {
  return (n >> i) & 1;
}

function setBit(n, i) {
  return n | (1 << i);
}
/* eslint-enable no-bitwise */

module.exports = { getBit, setBit };
