import { selicEntries } from "./selic-entries";

describe("selicEntries", () => {
    const desiredSelicEntrie = [
        {
            "data": '08/03/2024',
            "valor": '0.041957',
        }
    ];

    test("Successful request for a given period", async () => {
        expect(await selicEntries("08/03/2024","08/03/2024")).toMatchObject(desiredSelicEntrie);
    });
});