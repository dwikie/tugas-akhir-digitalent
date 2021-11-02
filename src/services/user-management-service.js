import { http, source } from "../configs/axios-instances";

export function register({ username, password }) {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await http
          .post(
            "/user",
            { username, password },
            {
              cancelToken: cancelSource.token,
            },
          )
          .then(
            (res) => {
              try {
                let result = res.data;
                if (typeof res.data === "string") result = JSON.parse(res.data);
                resolve(result);
              } catch (err) {
                reject(err);
              }
            },
            (err) => {
              reject(err);
            },
          )
          .catch((err) => {
            reject(err);
          });
      });
    },
    cancel: cancelSource.cancel,
  };
}
