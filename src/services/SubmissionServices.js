import { httpAuth, source } from "../configs/axios-instances";
import { DateConversion, FileToBase64String } from "../utils";

export function GetAllSubmission() {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .get("/submission", {
            cancelToken: cancelSource.token,
          })
          .then(
            (res) => {
              try {
                let result = res.data;
                if (typeof res.data.result === "string")
                  result = JSON.parse(res.data);
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

export function GetCustomerSubmission() {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .get("/customer_submission", {
            cancelToken: cancelSource.token,
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

export function CreateSubmission(submission) {
  const cancelSource = source();
  return {
    start: function () {
      return new Promise(async (resolve, reject) => {
        return await httpAuth
          .post(
            "/submission",
            {
              ...submission,
              TanggalLahir: DateConversion.MomentToISOString(
                submission.TanggalLahir,
              ),
              SlipGaji: await FileToBase64String(
                submission.SlipGaji[0].originFileObj,
              ),
              BuktiKtp: await FileToBase64String(
                submission.BuktiKtp[0].originFileObj,
              ),
              PendapatanPerbulan: parseInt(submission.PendapatanPerbulan),
            },
            {
              cancelToken: cancelSource.token,
            },
          )
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
