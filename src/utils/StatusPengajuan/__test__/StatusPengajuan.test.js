import StatusPengajuan from "../StatusPengajuan";

test("Valid Status", () => {
  expect(StatusPengajuan(1)).toEqual({
    status: "processing",
    detail: "Menunggu Konfirmasi",
  });
  expect(StatusPengajuan(2)).toEqual({ status: "error", detail: "Ditolak" });
  expect(StatusPengajuan(3)).toEqual({
    status: "success",
    detail: "Disetujui",
  });
  expect(StatusPengajuan(4)).toEqual({ status: "success", detail: "Selesai" });
});

test("Invalid Status", () => {
  expect(() => StatusPengajuan(5)).toThrow(RangeError);
  expect(() => StatusPengajuan("1")).toThrow(TypeError);
});
