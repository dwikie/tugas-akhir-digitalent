import React, { useCallback, useMemo, useState, useEffect } from "react";
import moment from "moment";
import { Col, Row } from "antd";
import Title from "../../../components/Title";
import { FormRevisiPengajuanKPR } from "../../../components/";
import { GetCustomerSubmission } from "../../../services/SubmissionServices";

export default function RevisiPengajuanKPR() {
  const [data, setData] = useState({});
  const service = useMemo(() => GetCustomerSubmission(), []);

  const getCustomerSubmission = useCallback(async () => {
    const { result } = await service.start();
    setData({
      ...result,
      TanggalLahir: moment(result.TanggalLahir),
      BuktiKtp: [
        {
          uid: "-1",
          name: result.BuktiKtp,
          status: "done",
          url: `${new URL(process.env.REACT_APP_API_URL).origin}/download/${
            result.BuktiKtp
          }`,
        },
      ],
      SlipGaji: [
        {
          uid: "-1",
          name: result.SlipGaji,
          status: "done",
          url: `${new URL(process.env.REACT_APP_API_URL).origin}/download/${
            result.SlipGaji
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
      <Title title="Reset Pengajuan" />
      <section className="display-container" id="form-pengajuan-kpr">
        <Col>
          <FormRevisiPengajuanKPR data={data} />
        </Col>
      </section>
    </Row>
  );
}
