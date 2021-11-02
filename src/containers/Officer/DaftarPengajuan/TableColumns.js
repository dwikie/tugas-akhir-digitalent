import { StatusPengajuan } from "../../../utils";
import moment from "moment";

// set locale moment to indonesia(id)
import "moment/locale/id";
moment.locale("id");

const Columns = [
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
    render: (text, row, index) => index + 1,
  },
  {
    title: "Tanggal Pengajuan",
    dataIndex: "CreatedAt",
    key: "tanggalPengajuan",
    render: (value) => moment(value).format("dddd, D MMMM YYYY"),
  },
  {
    title: "Nama",
    dataIndex: "NamaLengkap",
    key: "nama",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "status",
    render: (value) => {
      return StatusPengajuan(value).detail;
    },
  },
  {
    title: "Rekomendasi",
    dataIndex: "Rekomendasi",
    key: "rekomendasi",
    // render: () => "Iya",
  },
];

export default Columns;
