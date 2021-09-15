import React, { useState } from "react";
import { Form, Input, Button, DatePicker, InputNumber, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
export default function FormPengajuanKPR() {
  const [validated, setValidated] = useState(false);
  const [form] = Form.useForm();
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleOnFinish = async (value) => {
    try {
      setValidated(true);
    } catch (err) {
      setValidated(false);
      throw new Error(err);
    }
  };
  return (
    <>
      <Form
        id="form-kpr"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
        onFinish={handleOnFinish}
      >
        <Form.Item
          name="nik"
          label="NIK"
          rules={[
            {
              required: true,
              message: "Mohon masukkan NIK",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="nama"
          label="Nama Lengkap"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Nama Lengkap",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="TL"
          label="Tempat Lahir"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Tempat Lahir",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="tanggal"
          label="Tanggal Lahir"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Tanggal Lahir",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="pekerjaan"
          label="Pekerjaan"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Pekerjaan",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="pendapatan"
          label="Pendapatan Perbulan"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Pendapatan",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="bukti_selfie"
          label="Bukti Selfie KTP"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Bukti Selfie KTP",
            },
          ]}
        >
          <Form.Item
            name="selfie"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">
                Upload file selfie KTP dalam bentuk .pdf
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="bukti_slip_gaji"
          label="Bukti Slip Gaji Suami dan/atau istri"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Bukti Gaji Suami dan/atau istri",
            },
          ]}
        >
          <Form.Item
            name="slip_gaji"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">
                Upload file slip gaji dalam bentuk .pdf
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
      <Button
        type="primary"
        loading={validated}
        htmlType="submit"
        style={{ display: "flex", alignItems: "center" }}
      >
        <strong>Submit Pengajuan KPR</strong>
      </Button>
    </>
  );
}
