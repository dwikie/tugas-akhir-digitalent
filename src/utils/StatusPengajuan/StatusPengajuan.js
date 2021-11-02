export default function StatusPengajuan(status) {
  if (typeof status !== "number")
    throw new TypeError("Status harus berupa number");
  switch (status) {
    case 1:
      return { status: "processing", detail: "Menunggu Konfirmasi" };
    case 2:
      return { status: "error", detail: "Ditolak" };
    case 3:
      return { status: "success", detail: "Terverifikasi" };
    case 4:
      return { status: "success", detail: "Disetujui" };
    default:
      throw RangeError(`Status ${status} tidak ditemukan`);
  }
}
