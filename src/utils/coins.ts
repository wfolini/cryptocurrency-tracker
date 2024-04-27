import { DEFAULT_CURRENCY } from "@/constants/coins";
import type { Currency } from "@/types/coins";

export function formatCurrency(
  value: number | undefined,
  currency: Currency = DEFAULT_CURRENCY,
  minimumFractionDigits = 4
) {
  return value
    ? Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: currency.toUpperCase(),
        minimumFractionDigits: value < 10 ? minimumFractionDigits : 2,
      }).format(value)
    : "-";
}

export function removeHTMLTags(text?: string) {
  return text?.replace(/<[^>]*>?/gm, "") ?? "";
}
