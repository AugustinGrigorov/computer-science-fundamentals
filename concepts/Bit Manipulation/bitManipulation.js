/* eslint-disable no-bitwise */
function getBit(n, i) {
  return (n >> i) & 1;
}

function setBit(n, i) {
  return n | (1 << i);
}

function clearBit(n, i) {
  const mask = ~(1 << i);
  return n & mask;
}

function reverseBits(n) {
  let reversed = 0;
  let remainingBits = n >>> 0;
  for (let i = 0; i < 32; i += 1, remainingBits >>= 1) {
    const lastBit = remainingBits & 1;
    reversed = (reversed << 1) | lastBit;
    if (i === 31) reversed >>>= 0; // Convert to an unsigned int
  }
  return reversed;
}
/* eslint-enable no-bitwise */

module.exports = {
  getBit,
  setBit,
  clearBit,
  reverseBits,
};
