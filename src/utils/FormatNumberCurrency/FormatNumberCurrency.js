export default function FormatNumberCurrency(
  number,
  { locale = "id-ID", style = "currency", currency = "IDR", ...rest },
) {
  return new Intl.NumberFormat(locale, { style, currency, ...rest }).format(
    number,
  );
}
