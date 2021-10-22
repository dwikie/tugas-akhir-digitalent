import React, { useEffect, useState } from "react";
import DisplayRow from "../DisplayRow";
import { Button, Col, DatePicker, Form, Input, Row, Upload, Alert } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { EditSubmission } from "../../services/SubmissionServices";

export default function FormRevisiPengajuanKPR({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const dummyRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const onFinish = async (value) => {
    setIsLoading(true);

    try {
      await EditSubmission(value).start();
      form.resetFields();
      setResponse({
        message: "Data anda telah berhasil diajukan.",
        type: "success",
      });
    } catch (err) {
      setIsLoading(false);
      switch (err.response.status) {
        case 400:
          setResponse({
            message: (
              <>
                <b>No. Induk KTP</b> yang anda masukkan sudah terdaftar
              </>
            ),
            type: "error",
          });
          form.getFieldInstance("Nik").focus();
          break;
        case 500:
          setResponse({
            message: "Internal Server Error",
            type: "error",
          });
          break;
        default:
          setResponse({
            message: `Terjadi Kesalahan: ${err.message}`,
            type: "error",
          });
          break;
      }
    }
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, [form, data]);

  return (
    <>
      {response && (
        <Alert
          style={{ marginBottom: "1.75rem", marginTop: "-1.75rem" }}
          message={response.message}
          type={response.type}
          showIcon
          closable
          afterClose={() => setResponse(null)}
        />
      )}
      <Form onFinish={onFinish} form={form}>
        <DisplayRow
          data={{
            label: "No. Induk KTP",
            value: (
              <Form.Item
                name="Nik"
                rules={[
                  {
                    required: true,
                    message: "Mohon isi NIK",
                  },
                  () => ({
                    validator(_, value) {
                      if (value && isNaN(value)) {
                        return Promise.reject(
                          new Error("Nik harus berupa nomor"),
                        );
                      }
                      if (value && value.length !== 16) {
                        return Promise.reject(
                          new Error("NIK harus berjumlah 16 karakter"),
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input name="Nik" placeholder="No. Induk KTP" />
              </Form.Item>
            ),
          }}
        />
        <DisplayRow
          data={{
            label: "Nama Lengkap",
            value: (
              <Form.Item
                name="NamaLengkap"
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Nama Lengkap",
                  },
                ]}
              >
                <Input name="NamaLengkap" placeholder="Nama Lengkap" />
              </Form.Item>
            ),
          }}
        />
        <DisplayRow
          data={{
            label: "Tempat, Tanggal Lahir",
            value: (
              <Row gutter={[8, 0]}>
                <Col xs={24} sm={13} md={16}>
                  <Form.Item
                    name="TempatLahir"
                    rules={[
                      {
                        required: true,
                        message: "Mohon isi Tempat Lahir",
                      },
                    ]}
                  >
                    <Input name="TempatLahir" placeholder="Tempat Lahir" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={11} md={8}>
                  <Form.Item
                    name="TanggalLahir"
                    rules={[
                      {
                        required: true,
                        message: "Mohon isi Tanggal Lahir",
                      },
                    ]}
                  >
                    <DatePicker
                      placeholder="Tanggal Lahir"
                      style={{ width: "100%" }}
                      name="TanggalLahir"
                    />
                  </Form.Item>
                </Col>
              </Row>
            ),
          }}
        />
        <DisplayRow
          data={{
            label: "Alamat saat ini",
            value: (
              <Form.Item
                name="Alamat"
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Alamat",
                  },
                ]}
              >
                <Input name="Alamat" placeholder="Alamat" />
              </Form.Item>
            ),
          }}
        />
        <DisplayRow
          data={{
            label: "Pekerjaan",
            value: (
              <Form.Item
                name="Pekerjaan"
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Pekerjaan anda",
                  },
                ]}
              >
                <Input name="Pekerjaan" placeholder="Pekerjaan" />
              </Form.Item>
            ),
          }}
        />
        <DisplayRow
          data={{
            label: "Pendapatan Perbulan",
            value: (
              <Form.Item
                name="PendapatanPerbulan"
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Pendapatan anda",
                  },
                ]}
              >
                <Input name="PendapatanPerbulan" placeholder="Pendapatan" />
              </Form.Item>
            ),
          }}
        />
        <DisplayRow
          data={{
            label: "Bukti Selfie KTP",
            value: (
              <Form.Item
                name="BuktiKtp"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Bukti Selfie KTP",
                  },
                ]}
              >
                <Upload.Dragger
                  name="BuktiKtp"
                  multiple={false}
                  customRequest={dummyRequest}
                  accept=".PDF"
                >
                  <p className="ant-upload-drag-icon">
                    <UploadOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Upload Selfie KTP dalam Bentuk PDF
                  </p>
                </Upload.Dragger>
              </Form.Item>
            ),
          }}
        />
        <DisplayRow
          data={{
            label: "Bukti Slip Gaji Suami/Istri",
            value: (
              <Form.Item
                name="SlipGaji"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Bukti Slip Gaji",
                  },
                ]}
              >
                <Upload.Dragger
                  name="SlipGaji"
                  multiple={false}
                  customRequest={dummyRequest}
                  accept=".PDF"
                >
                  <p className="ant-upload-drag-icon">
                    <UploadOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Upload Slip Gaji dalam Bentuk PDF
                  </p>
                </Upload.Dragger>
              </Form.Item>
            ),
          }}
        />
        <Row justify="end">
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            style={{ display: "flex", alignItems: "center" }}
          >
            Submit Pengajuan
          </Button>
        </Row>
      </Form>
    </>
  );
}
