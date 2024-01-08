// my_math.test.ts

import { sum, diff } from "../src/my_math";

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtract 12 - 9 to equal 3', () => {
  expect(diff(12, 9)).toBe(3);
});
