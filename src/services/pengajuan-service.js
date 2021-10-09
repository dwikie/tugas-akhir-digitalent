import { httpAuth, source } from "../configs/axios-instances";

export function getAll(page = 1, offset = 10) {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .get("list_pengajuan", {
            cancelToken: cancelSource.token,
          })
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

export function getById(idCustomer) {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .get("pengajuan", {
            params: {
              id_customer: idCustomer,
            },
            cancelToken: cancelSource.token,
          })
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

export function getAdditionalDocument(idSubmission) {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .get("kelengkapan_data", {
            cancelToken: cancelSource.token,
          })
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

export default new (class ServicePengajuan {
  constructor() {
    this.getAll = getAll;
    this.getById = getById;
  }
})();
