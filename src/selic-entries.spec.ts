import { selicEntries } from "./selic-entries";

describe("selicEntries", () => {
    test("Successful request for a given period", async () => {
        expect(await selicEntries("08/03/2024","08/03/2024")).toEqual([
            {
                "data": '08/03/2024',
                "valor": '0.041957',
            },
        ]);
    });
});