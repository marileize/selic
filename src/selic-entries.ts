export async function selicEntries(initialDate: string, finalDate: string) {
    const url = new URL(
        "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json",
    );
    url.search = new URLSearchParams({
        dataInicial: initialDate,
        dataFinal: finalDate,
    }).toString();
    
    const response = await fetch(url.toString());
    const selic_entries = await response.json();
    return selic_entries;
}