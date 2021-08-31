import axios from "axios";

// Check if already authenticated
// Return false if it has expired/invalid/empty token
export function isAuthenticated() {
  const authToken = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY);
  // If token not found on local storage
  if (!authToken) {
    localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN_KEY);
    return false;
  }
  // If token found, validate token below
  // =================================== //
}

// Request and set token from server to Local Storage
export function authenticate({ username, password }) {
  const apiURL = process.env.REACT_APP_API_URL;
  return new Promise(async (resolve, reject) => {
    return await axios
      .post(`${apiURL}/login`, { username, password }, null)
      .then(
        (res) => {
          localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_KEY, "token");
          resolve(res.data);
        },
        (err) => reject(err),
      );
  });
}
