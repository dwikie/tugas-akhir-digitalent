import React, { useEffect, useState } from "react";
import { Table, Button, Form, Input, Row, Col, Typography, Alert } from "antd";
import { AiTwotonePrinter, AiOutlineSearch } from "react-icons/ai";
import { httpAuth } from "../../configs/axios-instances";

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
    render: (text) => {
      switch (text) {
        case 1:
          return "Menunggu Konfirmasi";
        case 2:
          return "Dibatalkan";
        case 3:
          return "Disetujui";
        case 4:
          return "Selesai";
        default:
          return "-";
      }
    },
  },
  {
    title: "Rekomendasi",
    dataIndex: "rekomendasi",
    key: "rekomendasi",
    render: () => "Iya",
  },
];

export default function ListPengajuan(props) {
  const [form] = Form.useForm();
  const { url } = props.match;
  const [isData, setIsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  function handleActionEditButton(id) {
    props.history.push(`${url}/${id}`);
  }

  useEffect(() => {
    const fetchData = () => {
      return httpAuth
        .get("list_pengajuan")
        .then((res) => {
          let { data } = res;
          let allData = typeof data === "string" ? JSON.parse(data) : data;
          setIsData(allData.data);
          setIsLoading(false);
        })
        .catch((err) => setIsError(err.message));
    };
    fetchData();
  }, []);

  return (
    <>
      <Typography.Title
        level={3}
        style={{ textAlign: "center", margin: "20px 0" }}
      >
        Daftar Pengajuan KPR
      </Typography.Title>

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
            Download Laporan &nbsp; <AiTwotonePrinter size="1.5em" />
          </Button>
        </Col>
      </Row>

      {isError ? (
        <Alert
          message={`Opps! ${isError}`}
          type="error"
          showIcon
          style={{ marginBottom: 20 }}
        />
      ) : null}

      <Table
        dataSource={isData}
        rowKey={(record) => record.id_pengajuan}
        loading={isLoading}
        columns={columns}
        onRow={(record) => {
          return {
            onClick: () => handleActionEditButton(record.id_pengajuan),
            style: {
              cursor: "pointer",
            },
          };
        }}
      />
    </>
  );
}
