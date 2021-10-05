import { StatusPengajuan } from "../../../utils";

const Columns = [
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
    render: (text, row, index) => index + 1,
  },
  {
    title: "Tanggal Pengajuan",
    dataIndex: "tanggalPengajuan",
    key: "tanggalPengajuan",
    render: () => "Senin, 23 Agustus",
  },
  {
    title: "Nama",
    dataIndex: "nama_lengkap",
    key: "nama",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (value) => {
      return StatusPengajuan(value).detail;
    },
  },
  {
    title: "Rekomendasi",
    dataIndex: "rekomendasi",
    key: "rekomendasi",
    render: () => "Iya",
  },
];

export default Columns;
