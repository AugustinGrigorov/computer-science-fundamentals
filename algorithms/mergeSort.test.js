const mergeSort = require('./mergeSort');

test('sorts correctly', () => {
  const input = [28, 8, 3, 9, 32, 5, 6, 12, 18];
  const want = [3, 5, 6, 8, 9, 12, 18, 28, 32];
  expect(mergeSort(input)).toStrictEqual(want);
});
