export async function selicEntries(initialDate: string, finalDate: string) {
    const url = new URL('https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json');
    const params = new URLSearchParams;
    params.append('dataInicial', initialDate);
    params.append('dataFinal', finalDate);
    url.search = params.toString();
    
    const response = await fetch(url.toString());
    const selic_entries = await response.json();
    return JSON.stringify(selic_entries);
}