import { Col, Divider, Row, Typography } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DisplayPengajuanKPR from "../../../components/DisplayPengajuanKPR/DisplayPengajuanKPR";
import { getById } from "../../../services/SubmissionServices";
import { useRouteMatch } from "react-router-dom";

export default function DetailPengajuan() {
  const { params } = useRouteMatch();
  const [detail, setDetail] = useState({});

  const service = useMemo(() => getById(params.id), [params.id]);

  const populateDetailPengajuan = useCallback(async () => {
    const { data } = await service.start();
    setDetail(data);
    console.log(data);
  }, [service]);

  useEffect(() => {
    populateDetailPengajuan();
    return () => service.cancel();
  }, [populateDetailPengajuan, service]);

  return (
    <Row gutter={[0, 12]} style={{ flexDirection: "column" }}>
      <Col>
        <Typography.Title level={5} style={{ textAlign: "center" }}>
          Data Diri Pengaju
        </Typography.Title>
        <Divider />
      </Col>
      <section style={{ whiteSpace: "nowrap" }} className="container">
        <DisplayPengajuanKPR data={detail} showStatus />
      </section>
    </Row>
  );
}
