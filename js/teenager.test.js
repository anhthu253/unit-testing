import { checkTeenagerStatus } from "./teenager.js";

test.skip("returns correct teenager status", () => {
  const teenagerStatus = checkTeenagerStatus(15);
  expect(teenagerStatus).toBe(true);
});

/* const testcases = [
  [12, true],
  [20, true],
  [11, false],
  [19, true],
  [21, false],
];
test.each(testcases)("return correct teenageer status", (age, expected) => {
  const teenagerStatus = checkTeenagerStatus(age);
  expect(teenagerStatus).toBe(expected);
}); */
