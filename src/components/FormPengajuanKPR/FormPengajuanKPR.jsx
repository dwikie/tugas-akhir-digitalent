import React, { useState } from "react";
import DisplayRow from "../DisplayRow";
import { Button, Col, DatePicker, Form, Input, Row, Upload, Alert } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FormPengajuan } from "../../configs/formpengajuan";
import { FileToBase64String, DateConversion } from "../../utils";

export default function FormPengajuanKPR() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const onFinish = async (value) => {
    setIsLoading(true);
    const data = {
      ...value,
      tanggal_lahir: DateConversion.MomentToISOString(value.tanggal_lahir),
      file_gaji: await FileToBase64String(value.file_gaji[0].originFileObj),
      file_ktp: await FileToBase64String(value.file_ktp[0].originFileObj),
    };
    
    return await FormPengajuan(data).then(
      (res) => {
        setIsLoading(false);
        form.resetFields();
        setResponse({
          message: "Data anda telah berhasil diajukan.",
          type: "success",
        });
      },
      (err) => {
        setIsLoading(false);
        switch (err.response.status) {
          case 400:
            setResponse({
              message: "Data yang anda masukkan sudah ada!",
              type: "error",
            });
            form.getFieldInstance("Nik").focus();
            break;
          default:
            setResponse({
              message: `Terjadi kesalahan: ${err.message}`,
              type: "error",
            });
            break;
        }
      },
    );
  };

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
                <Input
                  name="PendapatanPerbulan"
                  placeholder="Pendapatan"
                  type="number"
                />
              </Form.Item>
            ),
          }}
        />
        <DisplayRow
          data={{
            label: "Bukti Selfie KTP",
            value: (
              <Form.Item
                name="file_ktp"
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
                  name="file_ktp"
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
                name="file_gaji"
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
                  name="file_gaji"
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
            style={{ flexDirection: "row" }}
            loading={isLoading}
          >
            Submit Pengajuan
          </Button>
        </Row>
      </Form>
    </>
  );
}
