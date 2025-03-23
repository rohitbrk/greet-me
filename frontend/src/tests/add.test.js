import { add } from "../utils/add";
import { test, expect } from "jest";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
