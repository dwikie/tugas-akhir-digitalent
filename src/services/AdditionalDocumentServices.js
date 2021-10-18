import { httpAuth, source } from "../configs/axios-instances";

export function CreateAdditionalDocument({
  AlamatRumah,
  LuasRumah,
  HargaRumah,
  JangkaPembayaran,
  DokumenPendukung,
  SubmissionID,
}) {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .post(
            "/completedoc",
            {
              AlamatRumah,
              LuasRumah: parseInt(LuasRumah),
              HargaRumah: parseInt(HargaRumah),
              JangkaPembayaran: parseInt(JangkaPembayaran),
              DokumenPendukung: "Belum bisa upload euy",
              SubmissionID: parseInt(SubmissionID),
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
