const fizzbuzz = require('./fizzbuzz')

test('fizzbuzzのユニットテスト', () => {
  expect(fizzbuzz.fizzbuzzString("test")).toBe('test');
  expect(fizzbuzz.fizzbuzzString(3)).toBe('fizz');
  expect(fizzbuzz.fizzbuzzString(5)).toBe('buzz');
  expect(fizzbuzz.fizzbuzzString(15)).toBe('fizzbuzz');
  expect(fizzbuzz.fizzbuzzString(1)).toBe("1");
  expect(fizzbuzz.fizzbuzzString(8)).toBe("8");
});