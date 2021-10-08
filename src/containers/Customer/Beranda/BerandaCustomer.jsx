import { Button, Col, Row, Empty } from "antd";
import React, { useState } from "react";
import Title from "../../../components/Title";
import DisplayPengajuanKPR from "../../../components/DisplayPengajuanKPR";
import DisplayKelengkapanDokumen from "../../../components/DisplayKelengkapanDokumen";
import { useHistory, useRouteMatch } from "react-router";

export default function BerandaCustomer() {

  // return <Empty description="Anda sedang tidak mengajukan KPR saat ini" />;

  const [detailPengajuan] = useState(null);
  const [kelengkapanDokumen] = useState(null);

  const { push } = useHistory();
  const { url } = useRouteMatch();

  // useState (( ) => {
  //   const getDetail = async () => {
  //     const { data } = await getById(1).start();
  //     setDetailPengajuan (data);
  //   };
  //   getDetail();
  // }, []);

  return (
    <Row gutter={[16, 12]} style={{ flexDirection: "column" }}>
      <Title title="Data Diri" />
      <section id="data-diri" style={{ whiteSpace: "nowrap" }}>
        <DisplayPengajuanKPR data={detailPengajuan} showStatus />
      </section>
      <Col>
        <Row justify="end">
          {/* 
            LENGKAPI DOKUMEN PENDUKUNG jika data diri TELAH DIVERIFIKASI dan DITERIMA oleh admin
            dan RESET DATA DIRI jika pengajuan data diri DITOLAK oleh admin  
          */}
          <Button onClick={() => push(`${url}/dokumen-tambahan`)}>
            Lengkapi Dokumen Pendukung
          </Button>
        </Row>
      </Col>
      <Title title="Kelengkapan Data KPR" />
      <section id="kelengkapan-data-kpr">
        <DisplayKelengkapanDokumen data={kelengkapanDokumen} showStatus />
      </section>
    </Row>
  );
}
