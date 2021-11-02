import { Col, Row } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FormRevisiKelengkapanDokumen } from "../../../components";
import Title from "../../../components/Title";
import { GetCustomerSubmission } from "../../../services/SubmissionServices";

export default function RevisiKelengkapanDokumen() {
  const [data, setData] = useState({});
  const service = useMemo(() => GetCustomerSubmission(), []);

  const getCustomerSubmission = useCallback(async () => {
    const { result } = await service.start();
    setData({
      ...result.CompleteDoc,
      DokumenPendukung: [
        {
          uid: "-1",
          name: result.CompleteDoc.DokumenPendukung,
          status: "done",
          url: `${new URL(process.env.REACT_APP_API_URL).origin}/download/${
            result.CompleteDoc.DokumenPendukung
          }`,
        },
      ],
    });
  }, [service]);

  useEffect(() => {
    getCustomerSubmission();
  }, [getCustomerSubmission]);

  return (
    <Row gutter={[16, 12]} style={{ flexDirection: "column" }}>
      <Title title="Revisi Kelengkapan Data KPR" />
      <section className="container" id="form-pengajuan-kpr">
        <Col>
          <FormRevisiKelengkapanDokumen data={data} />
        </Col>
      </section>
    </Row>
  );
}
