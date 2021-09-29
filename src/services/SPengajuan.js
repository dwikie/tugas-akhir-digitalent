import { httpAuth, source } from "../configs/axios-instances";

function get() {
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

export default class SPengajuan {
  constructor() {
    this.get = get();
    this.getById = null;
    this.postPengajuan = null;
    this.postVerifikasiPengajuan = null;
    this.postStatusPengajuan = null;
  }
}
