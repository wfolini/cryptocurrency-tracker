export function formatCurrency(
  value: number | undefined,
  currency: string,
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
