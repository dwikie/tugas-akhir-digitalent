import React from "react";
import { Col, Row } from "antd";
import FormPengajuanKPR from "../../../components/FormPengajuanKPR";
import Title from "../../../components/Title";

export default function BuatPengajuan() {
  return (
    <Row gutter={[16, 12]} style={{ flexDirection: "column" }}>
      <Title title="Buat Pengajuan" />
      <section className="container" id="form-pengajuan-kpr">
        <Col>
          <FormPengajuanKPR />
        </Col>
      </section>
    </Row>
  );
}
