import { Col, Row, Steps } from "antd";
import {
  ProfileOutlined,
  SmileOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DisplayPengajuanKPR from "../../../components/DisplayPengajuanKPR";
import DisplayKelengkapanDokumen from "../../../components/DisplayKelengkapanDokumen";
import { useHistory, useRouteMatch } from "react-router";
import { GetCustomerSubmission } from "../../../services/SubmissionServices";
import { Button } from "../../../components/elements";

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

  return (
    <Row gutter={[16, 12]} style={{ flexDirection: "column" }}>
      <Steps
        className="text-primary"
        direction="vertical"
        current={2}
        status="finish"
        percent={60}
      >
        {/* Pengajuan */}
        <Steps.Step
          title="Pengajuan"
          description={
            detailPengajuan?.ID ? (
              <>
                <DisplayPengajuanKPR data={detailPengajuan} showStatus />
                {detailPengajuan?.Status === 3 &&
                !detailPengajuan.CompleteDoc?.ID ? (
                  <Button
                    prefixCls="my-4"
                    type={"primary"}
                    onClick={() => push(`${url}/dokumen-tambahan`)}
                  >
                    Lengkapi Dokumen Pendukung
                  </Button>
                ) : null}
                {detailPengajuan?.Status === 2 ? (
                  <Button
                    prefixCls="my-4"
                    type={"primary"}
                    danger
                    onClick={() => push(`${url}/revisi-pengajuan`)}
                  >
                    Reset Data Diri
                  </Button>
                ) : null}
              </>
            ) : (
              "Yuk, segera buat pengajuan"
            )
          }
          icon={<SolutionOutlined />}
        />
        {/* Dokumen Pelengkap */}
        <Steps.Step
          title="Data KPR"
          description={
            detailPengajuan?.CompleteDoc?.ID ? (
              detailPengajuan.CompleteDoc?.ID ? (
                <>
                  <DisplayKelengkapanDokumen
                    data={detailPengajuan.CompleteDoc}
                    showStatus
                  />
                  <Col>
                    {detailPengajuan.CompleteDoc?.Status === 2 ? (
                      <Button
                        prefixCls="my-4"
                        type={"primary"}
                        danger
                        onClick={() => push(`${url}/revisi-dokumen-tambahan`)}
                      >
                        Reset Pengajuan KPR
                      </Button>
                    ) : null}
                  </Col>
                </>
              ) : null
            ) : (
              "Sepertinya kamu belum submit data KPR, deh!"
            )
          }
          icon={<ProfileOutlined />}
        />
        <Steps.Step
          title="Selesai"
          description={
            detailPengajuan?.Status === 3 &&
            detailPengajuan?.CompleteDoc?.Status === 4
              ? "Selamat, pengajuan KPR anda diterima"
              : "Belum selesai, nih!"
          }
          icon={<SmileOutlined />}
        />
      </Steps>
    </Row>
  );
}
