import React from "react";
import {
  Table,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { AiTwotonePrinter, AiOutlineSearch } from "react-icons/ai";

// Data Pengajuan KPR
const datas = [
  {
    tanggalPengajuan: "08 Juli 2021 10.00 WIB",
    nama: "Asep Sunandar",
    status: "Menunggu Persetujuan",
    rekomendasi: "Tidak",
  },
  {
    tanggalPengajuan: "05 Juli 2021 13.00 WIB",
    nama: "Budi Rangga",
    status: "Disetujui",
    rekomendasi: "Setujui",
  },
  {
    tanggalPengajuan: "18 Juni 2021 14.00 WIB",
    nama: "Gayus Tambunan",
    status: "Ditolak",
    rekomendasi: "Tidak",
  },
  {
    tanggalPengajuan: "10 Juni 2021 21.00 WIB",
    nama: "Nia Kurniasih",
    status: "Menunggu Verifikasi",
    rekomendasi: "-",
  },
  {
    tanggalPengajuan: "10 Juni 2021 20.00 WIB",
    nama: "Jaja Sukaraja",
    status: "Terverifikasi",
    rekomendasi: "-",
  },
  {
    tanggalPengajuan: "09 Juni 2021 20.00 WIB",
    nama: "Koswara",
    status: "Tidak Terverifikasi",
    rekomendasi: "-",
  },
];

export default function ListPengajuan(props) {
  const { url } = props.match;
  function handleActionEditButton(id) {
    props.history.push(`${url}/${id}`);
  }

  return (
    <div>
      <h3 className="text-center mb-4">Daftar Pengajuan KPR</h3>

      {/* Searh Form and Button Download Laporan */}
      <div>
        <Form className="my-3">
          <Row className="justify-content-between">
            {/* Search Form */}
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Search
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <AiOutlineSearch />
                </InputGroup.Text>
                <FormControl id="inlineFormInputGroup" placeholder="Search" />
              </InputGroup>
            </Col>
            {/* Button Download Laporan */}
            <Col xs="auto">
              <Button variant="warning">
                Download Laporan <AiTwotonePrinter />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      {/* Table Pengajuan KPR */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Pengajuan</th>
            <th>Nama</th>
            <th>Status</th>
            <th>Rekomendasi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.tanggalPengajuan}</td>
              <td>{data.nama}</td>
              <td>{data.status}</td>
              <td>{data.rekomendasi}</td>
              <td>
                <Button
                  variant="link"
                  onClick={() => handleActionEditButton(index)}
                >
                  Link
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
