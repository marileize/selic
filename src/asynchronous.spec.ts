import { asyncFunc } from "./asynchronous";

test("Testing async function", async () => {
  expect(await asyncFunc("John")).toBe("Hello John");
});

test("Using promises", () => {
  asyncFunc("Mary")
    .then((result) => expect(result).toBe("Hello Mary"))
    .catch((err) => {
      throw err;
    });
});
