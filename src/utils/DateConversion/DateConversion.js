function MomentToISOString(date) {
  if (date?._isAMomentObject) {
    return new Date(date?._d).toISOString();
  }
  throw new TypeError("Parameter harus berupa Moment Object Date");
}

function DateToLocale(
  date,
  { locale = "id-ID", dateStyle = "long", hourCycle = "h23", ...rest },
) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: dateStyle,
    hourCycle: hourCycle,
    ...rest,
  }).format(new Date(date));
}

export { MomentToISOString, DateToLocale };
