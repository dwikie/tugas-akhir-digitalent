import JWTDecode from "jwt-decode";

export default function DecodeJWToken(JWToken) {
  try {
    return JWTDecode(JWToken);
  } catch (err) {
    return null;
  }
}
