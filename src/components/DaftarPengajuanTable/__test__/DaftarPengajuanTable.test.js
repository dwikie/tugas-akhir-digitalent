import React from "react";
import DaftarPengajuanTable from "../DaftarPengajuanTable";
import Columns from "../../../containers/Officer/DaftarPengajuan/TableColumns";
import { render, screen, fireEvent } from "@testing-library/react";

const fakeData = [
  {
    alamat: "Bojongsoang no.180 Bandung",
    bukti_gaji: "798735247/files/doc_downloads/test.pdf",
    bukti_ktp: "798735247/files/doc_downloads/test.pdf",
    id_cust: 1,
    id_pengajuan: 1,
    nama_lengkap: "Asep Sunandar",
    nik: "12345678910",
    pekerjaan: "Seniman",
    pendapatan_perbulan: 5000000,
    status: 3,
    tanggal_lahir: "07/08/1980",
    tempat_lahir: "Bandung",
  },
  {
    alamat: "Bojongsoang no.180 Bandung",
    bukti_gaji: "https://s21.q4cdn.com/798735247/files/doc_downloads/test.pdf",
    bukti_ktp: "https://s21.q4cdn.com/798735247/files/doc_downloads/test.pdf",
    id_cust: 2,
    id_pengajuan: 2,
    nama_lengkap: "Asep Sunarya",
    nik: "12345678910",
    pekerjaan: "Seniman",
    pendapatan_perbulan: 5000000,
    status: 2,
    tanggal_lahir: "07/08/1980",
    tempat_lahir: "Bandung",
  },
];

const tableTestId = "table-daftar-pengajuan";
const alertTestId = "alert-daftar-pengajuan";
const skeletonTestId = "skeleton-daftar-pengajuan";

it("Checking Table Daftar Pengajuan", () => {
  render(<DaftarPengajuanTable />);
  const tablePengajuanElement = screen.getByTestId(tableTestId);
  expect(tablePengajuanElement).toBeTruthy();
});

describe("Rendering Table", () => {
  it("With data", () => {
    render(<DaftarPengajuanTable data={fakeData} columns={Columns} />);
    const tablePengajuanElement = screen.getByTestId(tableTestId);
    expect(tablePengajuanElement).toBeTruthy();
  });

  it("With error and Loading", () => {
    render(
      <DaftarPengajuanTable
        data={undefined}
        columns={Columns}
        error="Could not fetch the Data"
        loading={true}
      />,
    );
    const alertPengajuanElement = screen.getByTestId(alertTestId);
    expect(alertPengajuanElement).toBeTruthy();
  });

  it("With data and clicked function", () => {
    const onTableRowClick = jest.fn();

    const { container } = render(
      <DaftarPengajuanTable
        data={fakeData}
        columns={Columns}
        loading={false}
        onTableRowClick={onTableRowClick}
      />,
    );
    const tableRow = container.querySelector(".ant-table-row");
    fireEvent.click(tableRow);
    expect(tableRow).not.toBeNull();
  });
});
