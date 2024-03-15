import { format, compareAsc } from "date-fns"

export async function selicEntries(initialDate: Date, finalDate: Date) {
    const url = new URL(
        "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json",
    );

    url.search = new URLSearchParams({
        dataInicial: format(initialDate, "dd/MM/yyyy"),
        dataFinal: format(finalDate, "dd/MM/yyyy"),
    }).toString();
    
    const response = await fetch(url.toString());
    return await response.json();
}