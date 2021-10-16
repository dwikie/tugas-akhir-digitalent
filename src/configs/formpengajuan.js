import { httpAuth } from "./axios-instances";

export function FormPengajuan({
  Nik,
  NamaLengkap,
  TempatLahir,
  TanggalLahir,
  Alamat,
  Pekerjaan,
  PendapatanPerbulan,
  // file_ktp,
  // file_gaji,
}) {
  return new Promise(async (resolve, reject) => {
    return await httpAuth
      .post("/submission", {
        Nik,
        NamaLengkap,
        TempatLahir,
        TanggalLahir,
        Alamat,
        Pekerjaan,
        PendapatanPerbulan: parseInt(PendapatanPerbulan),
        // file_gaji,
        // file_ktp,
      })
      .then(
        (res) => {
          resolve({ ...res.data });
        },
        (err) => reject(err),
      );
  });
}
