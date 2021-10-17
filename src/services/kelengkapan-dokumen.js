import { httpAuth, source } from "../configs/axios-instances";

export function PostAdditionalDocument({
  alamat_rumah,
  luas_tanah,
  harga_rumah,
  jangka_pembayaran_thn,
  submissionID,
}) {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .post(
            "/completedoc",
            {
              AlamatRumah: alamat_rumah,
              LuasRumah: luas_tanah,
              HargaRumah: harga_rumah,
              JangkaPembayaran: parseInt(jangka_pembayaran_thn),
              SubmissionID: submissionID,
            },
            {
              cancelToken: cancelSource.token,
            },
          )
          .then(
            (res) => {
              try {
                resolve(res);
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

export default new (class ServiceKelengkapanDocument {
  constructor() {
    this.PostAdditionalDocument = PostAdditionalDocument;
  }
})();
