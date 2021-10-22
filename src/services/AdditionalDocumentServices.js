import { httpAuth, source } from "../configs/axios-instances";
import { FileToBase64String } from "../utils";

export function CreateAdditionalDocument({
  AlamatRumah,
  LuasRumah,
  HargaRumah,
  JangkaPembayaran,
  DokumenPendukung,
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
              DokumenPendukung: await FileToBase64String(
                DokumenPendukung[0].originFileObj,
              ),
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

export function EditAdditionalDocument({
  AlamatRumah,
  LuasRumah,
  HargaRumah,
  JangkaPembayaran,
  DokumenPendukung,
}) {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .put(
            "/customer_update_completedoc",
            {
              AlamatRumah,
              LuasRumah: parseInt(LuasRumah),
              HargaRumah: parseInt(HargaRumah),
              JangkaPembayaran: parseInt(JangkaPembayaran),
              DokumenPendukung: DokumenPendukung[0]?.originFileObj
                ? await FileToBase64String(DokumenPendukung[0].originFileObj)
                : DokumenPendukung[0].name,
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

export function VerifyAdditionalDocument(idAdditionalDocument, { Status }) {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .put(`/completedoc/${idAdditionalDocument}`, {
            Status: parseInt(Status),
          })
          .then(
            (res) => {
              try {
                let result = res.data;
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
