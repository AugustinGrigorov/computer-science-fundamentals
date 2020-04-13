const { setBit, getBit } = require('./bitManipulation');

test('gets bit correctly', () => {
  const input = [
    [4, [0, 0, 1]],
    [5, [1, 0, 1]],
    [6, [0, 1, 1]],
    [7, [1, 1, 1]],
  ];
  input.forEach(([n, bits]) => {
    bits.forEach((bit, i) => {
      expect(getBit(n, i)).toBe(bit);
    });
  });
});

test('sets bit correctly', () => {
  const input = [
    [4, 5, 0],
    [4, 6, 1],
    [6, 14, 3],
  ];
  input.forEach(([n, want, i]) => {
    expect(setBit(n, i)).toBe(want);
  });
});
