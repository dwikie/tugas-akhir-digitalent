import React from "react";
import { FilePdfOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import ButtonDownload from "../components/Dashboard/Petugas/ListPengajuan/button-download";
import InputSearch from "../components/Dashboard/Petugas/ListPengajuan/input-search";
import TableListPengajuan from "../components/Dashboard/Petugas/ListPengajuan/table-list-pengajuan";

export default function _ListPengajuan() {
  const breakPoint = useBreakpoint();

  return (
    <Row gutter={[0, 16]} style={{ flexDirection: "column" }}>
      <Col>
        <Typography.Title level={5} style={{ textAlign: "center" }}>
          Daftar Pengajuan
        </Typography.Title>
        <Divider />
      </Col>
      <Row
        justify={"space-between"}
        style={{ flexDirection: breakPoint.md ? "row" : "column-reverse" }}
        gutter={[0, 16]}
      >
        <Col sm={24} md={8}>
          <InputSearch placeholder={"Cari..."} style={{ width: "100%" }} />
        </Col>
        <Col sm={24} md={8}>
          <ButtonDownload
            style={{ width: "100%" }}
            icon={<FilePdfOutlined />}
            text="Download Daftar Pengajuan"
          />
        </Col>
      </Row>
      <Col>
        <TableListPengajuan />
      </Col>
    </Row>
  );
}
