import { test, expect } from vitest&quot;
import { add } from "./math.js&quot";
test("Addition test", () => {
expect(add(10, 20)).toBe(30);
});