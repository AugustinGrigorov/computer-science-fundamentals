const HashTable = require('./hashTable');

test('correctly sets and gest values', () => {
  const hashTable = new HashTable();
  hashTable.set('abc', 1);
  expect(hashTable.get('abc')).toBe(1);
});

test('non-existent values are undefined', () => {
  const hashTable = new HashTable();
  expect(hashTable.get('abc')).toBe(undefined);
});

function randomCharacter() {
  const totalCharacters = 65535;
  const randCharCode = Math.floor(Math.random() * (totalCharacters + 1));
  return String.fromCharCode(randCharCode);
}

test('handles large amount of values', () => {
  const hashTable = new HashTable();
  const keyValuePairs = [];

  for (let i = 0; i < 10000; i += 1) {
    let key = '';
    let value = '';
    for (let j = 0; j < 5; j += 1) {
      key += randomCharacter();
      value += randomCharacter();
    }
    hashTable.set(key, value);
    keyValuePairs.push([key, value]);
  }

  keyValuePairs.forEach(([key, value]) => {
    expect(hashTable.get(key)).toBe(value);
  });
});
