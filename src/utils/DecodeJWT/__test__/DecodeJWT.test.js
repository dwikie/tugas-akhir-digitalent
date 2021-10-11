import DecodeJWT from "../DecodeJWT";

const ValidToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJ1c2VyX2lkIjozfQ.5NJHfg_saDemYOmQcqbO3x_WCW8e4AxoduV72nXgJRI";
const InvalidToken = "eyJyb2xlIjoiY3VzdG9tZXIiLCJ1c2VyX2lkIjozfQ";

test("Valid Token", () => {
  const value = DecodeJWT(ValidToken);
  expect(value).not.toBeNull();
});

test("Invalid Token", () => {
  const value = DecodeJWT(InvalidToken);
  expect(value).toBeNull();
});
