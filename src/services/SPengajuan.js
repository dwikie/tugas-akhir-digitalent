import { httpAuth, source } from "../configs/axios-instances";

function getAll() {
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

function getById(idCustomer) {
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

export default class SPengajuan {
  constructor() {
    this.getAll = getAll();
    this.getById = getById;
    this.postPengajuan = null;
    this.postVerifikasiPengajuan = null;
    this.postStatusPengajuan = null;
  }
}
