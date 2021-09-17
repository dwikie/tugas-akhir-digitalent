import { httpAuth } from "./axios-instances";
const AUTH_KEY = process.env.REACT_APP_AUTH_TOKEN_KEY;
export function FormPengajuan({
  nik,
  nama_lengkap,
  tempat_lahir,
  tanggal_lahir,
  alamat,
  pekerjaan,
  pendapatan_perbulan,
  bukti_ktp,
}) {
  return new Promise(async (resolve, reject) => {
    return await httpAuth
      .post("buat_pengajuan", {
        nik,
        nama_lengkap,
        tempat_lahir,
        tanggal_lahir,
        alamat,
        pekerjaan,
        pendapatan_perbulan,
        bukti_ktp,
      })
      .then(
        (res) => {
          localStorage.setItem(
            AUTH_KEY,
            JSON.stringify({
              nik,
              nama_lengkap,
              tempat_lahir,
              tanggal_lahir,
              alamat,
              pekerjaan,
              pendapatan_perbulan,
              bukti_ktp,
            }),
          );
          resolve({ ...res.data });
        },
        (err) => reject(err),
      );
  });
}
