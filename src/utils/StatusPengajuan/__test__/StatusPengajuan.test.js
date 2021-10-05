import StatusPengajuan from "../StatusPengajuan";

test("Valid Status", () => {
  expect(StatusPengajuan(1)).toBe("Menunggu Konfirmasi");
  expect(StatusPengajuan(2)).toBe("Dibatalkan");
  expect(StatusPengajuan(3)).toBe("Disetujui");
  expect(StatusPengajuan(4)).toBe("Selesai");
});

test("Invalid Status", () => {
  expect(() => StatusPengajuan(5)).toBe("-");
  expect(() => StatusPengajuan("1")).toThrow(TypeError);
});
