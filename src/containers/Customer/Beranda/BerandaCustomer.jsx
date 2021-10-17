import { Button, Col, Empty, Row } from "antd";
import { CaretRightFilled, ProfileOutlined } from "@ant-design/icons";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DisplayPengajuanKPR from "../../../components/DisplayPengajuanKPR";
import DisplayKelengkapanDokumen from "../../../components/DisplayKelengkapanDokumen";
import { useHistory, useRouteMatch } from "react-router";
import { GetCustomerSubmission } from "../../../services/pengajuan-service";

export default function BerandaCustomer() {
  const [detailPengajuan, setDetailPengajuan] = useState({});
  const service = useMemo(() => GetCustomerSubmission(), []);

  const { push } = useHistory();
  const { url } = useRouteMatch();

  const getDetail = useCallback(async () => {
    try {
      const { result } = await service.start();
      setDetailPengajuan(result);
    } catch (err) {
      setDetailPengajuan(null);
    }
  }, [service]);

  useEffect(() => {
    getDetail();
    return () => {
      service.cancel();
      setDetailPengajuan(null);
    };
  }, [service, getDetail]);

  return detailPengajuan ? (
    <Row gutter={[16, 12]} style={{ flexDirection: "column" }}>
      <DisplayPengajuanKPR data={detailPengajuan} showStatus />
      <Col>
        <Row justify="end">
          {detailPengajuan?.Status === 3 && !detailPengajuan.CompleteDoc?.ID ? (
            <Button
              icon={<CaretRightFilled />}
              type={"primary"}
              onClick={() => push(`${url}/dokumen-tambahan`)}
            >
              Lengkapi Dokumen Pendukung
            </Button>
          ) : null}
          {detailPengajuan?.Status === 2 ? (
            <Button
              icon={<ProfileOutlined />}
              type={"primary"}
              danger
              onClick={() => push(`${url}/dokumen-tambahan`)}
            >
              Reset Data Diri
            </Button>
          ) : null}
        </Row>
      </Col>
      {detailPengajuan?.Status === 3 && detailPengajuan.CompleteDoc?.ID ? (
        <>
          <DisplayKelengkapanDokumen
            data={detailPengajuan.CompleteDoc}
            showStatus
          />
          {detailPengajuan.CompleteDoc?.Status === 2 ? (
            <Button
              icon={<ProfileOutlined />}
              type={"primary"}
              danger
              onClick={() => push(`${url}/dokumen-tambahan`)}
            >
              Reset Pengajuan KPR
            </Button>
          ) : null}
        </>
      ) : null}
    </Row>
  ) : (
    <Empty description="Belum Membuat Pengajuan" />
  );
}
