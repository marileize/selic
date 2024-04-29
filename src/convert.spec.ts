import { convertSelicEntry } from "./convert";
import { format, compareAsc } from "date-fns";

describe("convert", () => {
  test("Successful convert date and value", () => {
    expect(convertSelicEntry("08/03/2024", "0.041957")).toEqual({
      date: new Date(format("2024-03-08", "yyyy-MM-dd")),
      value: 0.041957,
    });
  });

  test("Invalid date", () => {
    expect(convertSelicEntry("XXXXXX", "0.041957")).toEqual(null);
  });

  test("Invalid value", () => {
    expect(convertSelicEntry("08/03/2024", "XX")).toEqual(null);
  });

  test("Invalid date and value", () => {
    expect(convertSelicEntry("20240308", "XX")).toEqual(null);
  });
});
