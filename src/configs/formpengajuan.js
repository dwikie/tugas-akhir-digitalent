import { httpAuth } from "./axios-instances";

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
        (res) => resolve({ ...res.data }),
        (err) => reject(err),
      );
  });
}
