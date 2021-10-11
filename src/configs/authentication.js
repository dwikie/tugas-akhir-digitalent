import { http } from "./axios-instances";
import Cookies from "js-cookie";
import { DecodeJWT } from "../utils";

const ACCESS_KEY = process.env.REACT_APP_AUTH_TOKEN_KEY;
// Check if already authenticated
export function IsAuthenticated() {
  const accessToken = Cookies.get(ACCESS_KEY);
  // If token not found on local storage
  if (!accessToken) {
    Cookies.remove(ACCESS_KEY, { path: "/" });
    return;
  }
  // If token found, validate token below
  try {
    const user = DecodeJWT(accessToken);
    return user;
  } catch {
    Cookies.remove(ACCESS_KEY, { path: "/" });
    return;
  }
}

// Request and set token from server to Local Storage (login)
export function Authenticate({ username, password }) {
  return new Promise(async (resolve, reject) => {
    return await http.post("/login", { username, password }, null).then(
      (res) => {
        const accessToken = res.data.result;
        const user = DecodeJWT(accessToken);
        Cookies.set(ACCESS_KEY, accessToken, { path: "/" });
        resolve(user);
      },
      (err) => reject(err),
    );
  });
}

// Remove token from local storage (logout)
export function DeAuthenticate() {
  Cookies.remove(ACCESS_KEY, { path: "/" });
}
