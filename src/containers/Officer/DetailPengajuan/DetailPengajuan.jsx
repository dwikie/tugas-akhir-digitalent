import { Col, Divider, Row, Typography } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DisplayPengajuanKPR from "../../../components/DisplayPengajuanKPR/DisplayPengajuanKPR";
import SPengajuan from "../../../services/SPengajuan";
import { useRouteMatch } from "react-router-dom";

export default function DetailPengajuan() {
  const service = useMemo(() => new SPengajuan(), []);
  const { params } = useRouteMatch();
  const [detail, setDetail] = useState({});

  const getDetailPengajuan = useMemo(
    () => service.getById(params.id),
    [service, params.id],
  );

  const populateDetailPengajuan = useCallback(async () => {
    const { data } = await getDetailPengajuan.start();
    setDetail(data);
    console.log(data);
  }, [getDetailPengajuan]);

  useEffect(() => {
    populateDetailPengajuan();
    return () => getDetailPengajuan.cancel();
  }, [populateDetailPengajuan, getDetailPengajuan]);

  return (
    <Row gutter={[0, 12]} style={{ flexDirection: "column" }}>
      <Col>
        <Typography.Title level={5} style={{ textAlign: "center" }}>
          Data Diri Pengaju
        </Typography.Title>
        <Divider />
      </Col>
      <section style={{ whiteSpace: "nowrap" }}>
        <DisplayPengajuanKPR data={detail} showStatus />
      </section>
    </Row>
  );
}
