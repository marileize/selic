import { format, compareAsc } from "date-fns";

export function convertSelicEntry(data: string, valor: string) {
  try {
    const date = new Date(format(format(data, "dd/MM/yyyy"), "yyyy-MM-dd"));
    const value = Number(valor);
    if (isNaN(value))
      return null;
    return { date, value };
  } catch (error) {
    return null;
  }
}
