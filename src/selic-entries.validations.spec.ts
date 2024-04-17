import { selicEntries } from "./selic-entries";
import fetchMock from "jest-fetch-mock";

describe("selicEntries", () => {
  beforeEach(() => {
    fetchMock.enableMocks();
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  test("Throws error for an initial date before Selic start date", async () => {
    await expect(() =>
      selicEntries(new Date("1900-06-05"), new Date("2024-03-11")),
    ).rejects.toThrow("Initial date cannot be before 4/06/1986");
  });

  test("Throws error for an initial date before Selic start date", async () => {
    await expect(() =>
      selicEntries(new Date("1900-06-05"), new Date("2024-03-11")),
    ).rejects.toThrow("Initial date cannot be before 4/06/1986");
  });

  test("Initial date cannot be after final date", async () => {
    await expect(() =>
      selicEntries(new Date("2024-03-12"), new Date("2024-03-11")),
    ).rejects.toThrow("Initial date cannot be after final date");
  });

  test("Empty dates", async () => {
    fetchMock.mockResponse(JSON.stringify({ status: true }));
    expect(await selicEntries()).toEqual({ status: true });
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith(
      "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json",
    );
  });

  test("Initial date empty", async () => {
    fetchMock.mockResponse(JSON.stringify({ status: true }));
    expect(await selicEntries(undefined, new Date("2024-03-11"))).toEqual({
      status: true,
    });
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith(
      "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json&dataFinal=11%2F03%2F2024",
    );
  });

  test("Final date empty", async () => {
    fetchMock.mockResponse(JSON.stringify({ status: true }));
    expect(await selicEntries(new Date("2024-03-11"))).toEqual({
      status: true,
    });
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith(
      "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json&dataInicial=11%2F03%2F2024",
    );
  });
});
