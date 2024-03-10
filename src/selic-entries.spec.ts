import { selicEntries } from "./selic-entries";

test("Testing selicEntries function", async () => {
    expect(await selicEntries("08/03/2024","08/03/2024")).toBe('[{"data":"08/03/2024","valor":"0.041957"}]')
});