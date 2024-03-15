import { selicEntries } from "./selic-entries";

describe("selicEntries", () => {
    test("Successful request for a given period", async () => {
        expect(
            await selicEntries(new Date("2024-03-08"), new Date("2024-03-11")),
        ).toEqual([
            {
                "data":"08/03/2024",
                "valor":"0.041957",
            },
            {
                "data":"11/03/2024",
                "valor":"0.041957",
            },
        ]);
    });
});