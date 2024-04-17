import { format, compareAsc } from "date-fns";

export async function selicEntries(initialDate?: Date, finalDate?: Date) {
  // Validate that the start date is before the Selic start date
  if (initialDate && initialDate < new Date("1986-06-04")) {
    throw new Error("Initial date cannot be before 4/06/1986");
  }

  // Validate that the initial date cannot be after the final date
  if (initialDate && finalDate && initialDate > finalDate) {
    throw new Error("Initial date cannot be after final date");
  }

  const url = new URL(
    "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json",
  );

  url.search = constructURLParams(initialDate, finalDate);

  const response = await fetch(url.toString());
  return await response.json();
}

function constructURLParams(initialDate?: Date, finalDate?: Date) {
  const params = new URLSearchParams();

  if (initialDate) {
    params.append("dataInicial", format(initialDate, "dd/MM/yyyy"));
  }

  if (finalDate) {
    params.append("dataFinal", format(finalDate, "dd/MM/yyyy"));
  }

  return params.toString();
}
