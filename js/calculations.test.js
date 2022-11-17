import { cubicVolume } from "./calculations.js";

test.skip("check if volumn correct", () => {
  const volume = cubicVolume(2, 5, 7);
  expect(volume).toBe(70);
});

/* const testcases = [
  [2, 5, 1, 10],
  [4, 7, -3, 0],
  [2, 0, 9, 0],
];

test.each(testcases)(
  "check if volumn null there",
  (width, height, depth, expected) => {
    const volumn = cubicVolume(width, height, depth);
    expect(volumn).toBe(expected);
  }
);
 */
