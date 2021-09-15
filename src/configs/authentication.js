import { http } from "./axios-instances";

const AUTH_KEY = process.env.REACT_APP_AUTH_TOKEN_KEY;
// Check if already authenticated
export function IsAuthenticated() {
  const authToken = localStorage.getItem(AUTH_KEY);
  // If token not found on local storage
  if (!authToken) {
    localStorage.removeItem(AUTH_KEY);
    return { isLoggedIn: false };
  }
  // If token found, validate token below
  // =================================== //
  try {
    const accountSession = JSON.parse(authToken);
    if (!accountSession?.isLoggedIn) {
      localStorage.removeItem(AUTH_KEY);
      return { isLoggedIn: false };
    }
    return accountSession;
  } catch {
    localStorage.removeItem(AUTH_KEY);
    return { isLoggedIn: false };
  }
}

// Request and set token from server to Local Storage (login)
export function Authenticate({ username, password, isPetugas }) {
  return new Promise(async (resolve, reject) => {
    return await http.post("login", { username, password }, null).then(
      (res) => {
        localStorage.setItem(
          AUTH_KEY,
          JSON.stringify({
            username,
            isPetugas,
            isLoggedIn: true,
          }),
        );
        resolve({ ...res.data, isPetugas });
      },
      (err) => reject(err),
    );
  });
}

// Remove token from local storage (logout)
export function DeAuthenticate() {
  localStorage.removeItem(AUTH_KEY);
}
