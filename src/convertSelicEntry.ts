import { parseISO } from "date-fns";

export function convertSelicEntry({data, valor }: { data: string; valor: string }) {
  try {
    const date = parseISO(
      data.split("/").reverse().join("-") + "T00:00:00.000Z",
    );
    const value = Number(valor);
    if (isNaN(value)) return null;
    return { date, value };
  } catch (error) {
    return null;
  }
}
