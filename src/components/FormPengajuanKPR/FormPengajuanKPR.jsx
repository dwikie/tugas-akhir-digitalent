import React from "react";
import DisplayRow from "../DisplayRow";
import { Button, Col, DatePicker, Form, Input, Row, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FileToBase64String, DateConversion } from "../../utils";

export default function FormPengajuanKPR() {
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
    const data = {
      ...value,
      tanggal_lahir: DateConversion.MomentToISOString(value.tanggal_lahir),
      file_gaji: await FileToBase64String(value.file_gaji[0].originFileObj),
      file_ktp: await FileToBase64String(value.file_ktp[0].originFileObj),
    };

    console.log(data);
  };

  return (
    <Form onFinish={onFinish}>
      <DisplayRow
        data={{
          label: "No. Induk KTP",
          value: (
            <Form.Item
              name="nik"
              rules={[
                {
                  required: true,
                  message: "Mohon isi NIK",
                },
              ]}
            >
              <Input name="nik" placeholder="No. Induk KTP" />
            </Form.Item>
          ),
        }}
      />
      <DisplayRow
        data={{
          label: "Nama Lengkap",
          value: (
            <Form.Item
              name="nama_lengkap"
              rules={[
                {
                  required: true,
                  message: "Mohon isi Nama Lengkap",
                },
              ]}
            >
              <Input name="nama_lengkap" placeholder="Nama Lengkap" />
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
                  name="tempat_lahir"
                  rules={[
                    {
                      required: true,
                      message: "Mohon isi Tempat Lahir",
                    },
                  ]}
                >
                  <Input name="tempat_lahir" placeholder="Tempat Lahir" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={11} md={8}>
                <Form.Item
                  name="tanggal_lahir"
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
                    name="tanggal_lahir"
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
              name="alamat"
              rules={[
                {
                  required: true,
                  message: "Mohon isi Alamat",
                },
              ]}
            >
              <Input name="alamat" placeholder="Alamat" />
            </Form.Item>
          ),
        }}
      />
      <DisplayRow
        data={{
          label: "Pekerjaan",
          value: (
            <Form.Item
              name="pekerjaan"
              rules={[
                {
                  required: true,
                  message: "Mohon isi Pekerjaan anda",
                },
              ]}
            >
              <Input name="pekerjaan" placeholder="Pekerjaan" />
            </Form.Item>
          ),
        }}
      />
      <DisplayRow
        data={{
          label: "Pendapatan Perbulan",
          value: (
            <Form.Item
              name="pendapatan"
              rules={[
                {
                  required: true,
                  message: "Mohon isi Pendapatan anda",
                },
              ]}
            >
              <Input name="pendapatan" placeholder="Pendapatan" />
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
        <Button type="primary" htmlType="submit">
          Submit Pengajuan
        </Button>
      </Row>
    </Form>
  );
}
