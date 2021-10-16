import { Button, Col, Empty, Row } from "antd";
import { CaretRightFilled } from "@ant-design/icons";
import React, { useState } from "react";
import Title from "../../../components/Title";
import DisplayPengajuanKPR from "../../../components/DisplayPengajuanKPR";
import DisplayKelengkapanDokumen from "../../../components/DisplayKelengkapanDokumen";
import { useHistory, useRouteMatch } from "react-router";
import { getCustomerSubmission } from "../../../services/pengajuan-service";

export default function BerandaCustomer() {
  const [detailPengajuan, setDetailPengajuan] = useState(null);
  const [kelengkapanDokumen] = useState(null);

  const { push } = useHistory();
  const { url } = useRouteMatch();

  useState(() => {
    async function getDetail() {
      const { result } = await getCustomerSubmission().start();
      setDetailPengajuan(result);
      console.log(result);
    }
    getDetail();
  }, []);

  return detailPengajuan ? (
    <Row gutter={[16, 12]} style={{ flexDirection: "column" }}>
      <Title title="Data Diri" />
      <section
        className="container"
        id="data-diri"
        style={{ whiteSpace: "nowrap" }}
      >
        <DisplayPengajuanKPR data={detailPengajuan} showStatus />
      </section>
      <Col>
        <Row justify="end">
          {/* 
        LENGKAPI DOKUMEN PENDUKUNG jika data diri TELAH DIVERIFIKASI dan DITERIMA oleh admin
        dan RESET DATA DIRI jika pengajuan data diri DITOLAK oleh admin  
      */}
          {detailPengajuan?.Status === 3 && !detailPengajuan.CompleteDoc?.ID && (
            <Button
              icon={<CaretRightFilled />}
              type={"primary"}
              onClick={() => push(`${url}/dokumen-tambahan`)}
            >
              Lengkapi Dokumen Pendukung
            </Button>
          )}
        </Row>
      </Col>
      {detailPengajuan?.Status === 3 && detailPengajuan.CompleteDoc?.ID ? (
        <>
          <Title title="Kelengkapan Data KPR" />
          <section
            className="container"
            id="kelengkapan-data-kpr"
            style={{ whiteSpace: "pre-wrap" }}
          >
            <DisplayKelengkapanDokumen data={kelengkapanDokumen} showStatus />
          </section>
        </>
      ) : null}
    </Row>
  ) : (
    <Empty description="Belum membuat Pengajuan" />
  );
}
