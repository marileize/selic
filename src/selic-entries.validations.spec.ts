import { selicEntries } from "./selic-entries";
import fetchMock from "jest-fetch-mock";

describe("selicEntries", () => {
  test("Throws error for an initial date before Selic start date", async () => {
    fetchMock.enableMocks();
    await expect(() =>
      selicEntries(new Date("1900-06-05"), new Date("2024-03-11")),
    ).rejects.toThrow("Initial date cannot be before 4/06/1986");
  });

  test("Throws error for an initial date before Selic start date", async () => {
    fetchMock.enableMocks();
    await expect(() =>
      selicEntries(new Date("1900-06-05"), new Date("2024-03-11")),
    ).rejects.toThrow("Initial date cannot be before 4/06/1986");
  });

  test("Initial date cannot be after final date", async () => {
    fetchMock.enableMocks();
    await expect(() =>
      selicEntries(new Date("2024-03-12"), new Date("2024-03-11")),
    ).rejects.toThrow("Initial date cannot be after final date");
  });

  test("Empty dates", async () => {
    fetchMock.mockResponse(() =>
      selicEntries(undefined, undefined).then((res) => "ok"),
    );
  });

  test("Initial date empty", async () => {
    fetchMock.mockResponse(() =>
      selicEntries(undefined, new Date("2024-03-11")).then((res) => "ok"),
    );
  });

  test("Final date empty", async () => {
    fetchMock.mockResponse(() =>
      selicEntries(new Date("2024-03-11"), undefined).then((res) => "ok"),
    );
  });
});
