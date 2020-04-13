const {
  setBit,
  getBit,
  clearBit,
  reverseBits,
} = require('./bitManipulation');

test('gets bit correctly', () => {
  const input = [4, 5, 6, 7];
  const want = [
    [0, 0, 1],
    [1, 0, 1],
    [0, 1, 1],
    [1, 1, 1],
  ];
  input.forEach((n, testCase) => {
    want[testCase].forEach((bit, i) => {
      expect(getBit(n, i)).toBe(bit);
    });
  });
});

test('sets bit correctly', () => {
  const input = [
    [4, 0],
    [4, 1],
    [6, 3],
  ];
  const want = [5, 6, 14];
  input.forEach(([n, i], testCase) => {
    expect(setBit(n, i)).toBe(want[testCase]);
  });
});

test('clears bit correctly', () => {
  const input = [
    [5, 0],
    [6, 1],
    [14, 3],
  ];
  const want = [4, 4, 6];
  input.forEach(([n, i], testCase) => {
    expect(clearBit(n, i)).toBe(want[testCase]);
  });
});

test('reverses bit correctly', () => {
  const input = [
    43261596,
    4294967293,
  ];
  const want = [
    964176192,
    3221225471,
  ];
  input.forEach((n, testCase) => {
    expect(reverseBits(n)).toBe(want[testCase]);
  });
});
