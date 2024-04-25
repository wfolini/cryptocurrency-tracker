export function formatCurrency(value: number | undefined, currency: string) {
  return value
    ? Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: currency.toUpperCase(),
      }).format(value)
    : "-";
}
