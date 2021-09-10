import React from "react";
import { Table, Button, Form, Input, Row, Col } from "antd";
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
  const [form] = Form.useForm();
  const { url } = props.match;
  function handleActionEditButton(id) {
    props.history.push(`${url}/${id}`);
  }

  const columns = [
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
    },
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Rekomendasi",
      dataIndex: "rekomendasi",
      key: "rekomendasi",
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
      render: (text, row, index) => {
        return (
          <Button onClick={() => handleActionEditButton(index)}>Link</Button>
        );
      },
    },
  ];

  return (
    <div>
      <h3 className="text-center mb-4">Daftar Pengajuan KPR</h3>

      {/* Searh Form and Button Download Laporan */}
      <Row justify="space-between">
        <Col md={8} sm={8} xs={12}>
          <Form form={form}>
            <Form.Item
              name="search"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<AiOutlineSearch className="site-form-item-icon" />}
                placeholder="Search"
              />
            </Form.Item>
          </Form>
        </Col>
        <Col md={8} sm={8} xs={12}>
          <Button block>
            Download Laporan <AiTwotonePrinter />
          </Button>
        </Col>
      </Row>

      <Table columns={columns} dataSource={datas} />
    </div>
  );
}
