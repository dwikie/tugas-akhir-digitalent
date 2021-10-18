import { FileDoneOutlined } from "@ant-design/icons";
import { Col, Row, Form, Select, Button } from "antd";
import React, { useState } from "react";
import { VerifySubmission } from "../../services/SubmissionServices";
import DisplayRow from "../DisplayRow";

export default function FormVerifikasiPengajuanKPR({
  idSubmission,
  updateSubmission,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (value) => {
    try {
      setIsLoading(true);
      await VerifySubmission(idSubmission, value).start();
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
          label: "Status Verifikasi",
          value: (
            <Row>
              <Col xs={24} sm={14} md={12} lg={8} xl={6} xxl={4}>
                <Form.Item
                  name="Status"
                  rules={[
                    {
                      required: true,
                      message: "Mohon isi Status Verifikasi",
                    },
                  ]}
                >
                  <Select name="Status" placeholder="- Menunggu Verifikasi -">
                    <Select.Option value="3">Terverifikasi</Select.Option>
                    <Select.Option value="2">Tidak Terverifikasi</Select.Option>
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
          Verifikasi
        </Button>
      </Row>
    </Form>
  );
}
