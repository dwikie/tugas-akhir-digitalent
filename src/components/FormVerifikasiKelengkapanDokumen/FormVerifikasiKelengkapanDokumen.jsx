import React, { useState } from "react";
import { FileDoneOutlined } from "@ant-design/icons";
import { Col, Row, Form, Select, Button } from "antd";
import { VerifyAdditionalDocument } from "../../services/AdditionalDocumentServices";
import DisplayRow from "../DisplayRow";

export default function FormVerifikasiKelengkapanDokumen({
  idAdditionalDocument,
  updateSubmission,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (value) => {
    try {
      setIsLoading(true);
      await VerifyAdditionalDocument(idAdditionalDocument, value).start();
      setIsLoading(false);
      updateSubmission();
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish}>
      <DisplayRow
        data={{
          label: "Status Pengajuan KPR",
          value: (
            <Row>
              <Col xs={24} sm={14} md={12} lg={8} xl={6} xxl={4}>
                <Form.Item
                  name="Status"
                  rules={[
                    {
                      required: true,
                      message: "Mohon isi Status Pengajuan KPR",
                    },
                  ]}
                >
                  <Select name="Status" placeholder="- Menunggu Verifikasi -">
                    <Select.Option value="4">Disetujui</Select.Option>
                    <Select.Option value="2">Ditolak</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          ),
        }}
      />
      <Row justify="end">
        <Button
          loading={isLoading}
          type="primary"
          icon={<FileDoneOutlined />}
          style={{ display: "flex", alignItems: "center" }}
          htmlType="submit"
        >
          Simpan
        </Button>
      </Row>
    </Form>
  );
}
