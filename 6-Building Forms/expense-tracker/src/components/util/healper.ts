export function currencyConverter(input: number) {
  const currency = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "USD",
    currencySign: "accounting",
  }).format(input);

  return currency;
}
