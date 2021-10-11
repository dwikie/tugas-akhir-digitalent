import { DateToLocale, MomentToISOString } from "../DateConversion";

const ISOString = "2021-10-03T06:47:02.394Z";
const momentObject = {
  _d: new Date(ISOString),
  _isAMomentObject: true,
  _isUTC: false,
  _isValid: true,
};

describe("Date to Locale String Format", () => {
  test("Valid Date", () => {
    expect(DateToLocale(ISOString, {})).toBe("3 Oktober 2021 13.47.02 WIB");
  });
  test("Invalid Date", () => {
    expect(() => DateToLocale("NOTDATESTRING", {})).toThrow(RangeError);
  });
});

describe("Moment Date Object to ISO String", () => {
  test("Valid Moment Object", () => {
    expect(MomentToISOString(momentObject)).toBe(ISOString);
  });

  test("Invalid Paremeter Type", () => {
    expect(() => MomentToISOString("NOTDATESTRING")).toThrow(TypeError);
  });

  test("Invalid Moment Date Object", () => {
    expect(() =>
      MomentToISOString({ ...momentObject, _d: new Date("NOTDATESTRING") }),
    ).toThrow(RangeError);
  });
});
