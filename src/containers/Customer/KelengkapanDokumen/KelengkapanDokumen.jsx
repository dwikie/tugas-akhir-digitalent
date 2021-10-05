import { Col, Row } from "antd";
import React from "react";
import FormKelengkapanDokumen from "../../../components/FormKelengkapanDokumen";
import Title from "../../../components/Title";

export default function KelengkapanDokumen() {
  return (
    <Row gutter={[16, 12]} style={{ flexDirection: "column" }}>
      <Title title="Silahkan isi Kelengkapan Data" />
      <section id="form-pengajuan-kpr">
        <Col>
          <FormKelengkapanDokumen />
        </Col>
      </section>
    </Row>
  );
}
