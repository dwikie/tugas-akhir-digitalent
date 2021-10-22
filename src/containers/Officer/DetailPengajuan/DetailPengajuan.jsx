import { Col, Empty, Row } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DisplayPengajuanKPR from "../../../components/DisplayPengajuanKPR/DisplayPengajuanKPR";
import { GetSubmissionById } from "../../../services/SubmissionServices";
import { useRouteMatch } from "react-router-dom";
import FormVerifikasiPengajuanKPR from "../../../components/FormVerifikasiPengajuanKPR";
import DisplayKelengkapanDokumen from "../../../components/DisplayKelengkapanDokumen";
import FormVerifikasiKelengkapanDokumen from "../../../components/FormVerifikasiKelengkapanDokumen";

export default function DetailPengajuan() {
  const { params } = useRouteMatch();
  const [submission, setSubmission] = useState({});

  const service = useMemo(() => GetSubmissionById(params.id), [params.id]);

  const getSubmission = useCallback(async () => {
    try {
      const { result } = await service.start();
      setSubmission(result);
    } catch (err) {
      setSubmission(null);
    }
  }, [service]);

  useEffect(() => {
    getSubmission();
    return () => service.cancel();
  }, [getSubmission, service]);

  return (
    <Row gutter={[0, 12]} style={{ flexDirection: "column" }}>
      {submission ? (
        <>
          <Col>
            <DisplayPengajuanKPR
              showTitle
              data={submission}
              showStatus={submission?.Status !== 1}
            />
            {submission?.Status === 1 ? (
              <FormVerifikasiPengajuanKPR
                idSubmission={params.id}
                updateSubmission={getSubmission}
              />
            ) : null}
          </Col>

          {submission?.CompleteDoc?.ID ? (
            <Col>
              <DisplayKelengkapanDokumen
                showTitle
                data={submission?.CompleteDoc}
                showStatus={submission?.CompleteDoc?.Status !== 1}
              />
              {submission?.CompleteDoc?.Status === 1 ? (
                <FormVerifikasiKelengkapanDokumen
                  idAdditionalDocument={submission?.CompleteDoc?.ID}
                  updateSubmission={getSubmission}
                />
              ) : null}
            </Col>
          ) : null}
        </>
      ) : (
        <Empty description="Pengajuan tidak ditemukan" />
      )}
    </Row>
  );
}
