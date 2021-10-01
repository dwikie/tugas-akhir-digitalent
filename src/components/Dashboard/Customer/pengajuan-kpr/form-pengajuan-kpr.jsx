import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Upload,
  message,
} from "antd";
import { FormPengajuan } from "../../../../configs/formpengajuan";
import { UploadOutlined } from "@ant-design/icons";
export default function FormPengajuanKPR() {
  const [validated, setValidated] = useState(false);
  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleOnFinish = async (value) => {
    setValidated(true);
    try {
      console.log(value);
      await FormPengajuan(value);
      message.success("Berhasil membuat pengajuan", 3);
      setValidated(false);
    } catch (err) {
      setValidated(false);
      throw new Error(err);
    }
  };

  return (
    <>
      <Form
        id="form-kpr"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
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
          <Input name="nik" />
        </Form.Item>
        <Form.Item
          name="nama_lengkap"
          label="Nama Lengkap"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Nama Lengkap",
            },
          ]}
        >
          <Input name="nama_lengkap" />
        </Form.Item>
        <Form.Item
          name="tempat_lahir"
          label="Tempat Lahir"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Tempat Lahir",
            },
          ]}
        >
          <Input name="tempat_lahir" />
        </Form.Item>
        <Form.Item
          name="tanggal_lahir"
          label="Tanggal Lahir"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Tanggal Lahir",
            },
          ]}
        >
          <DatePicker name="tanggal_lahir" />
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
          <Input name="pekerjaan" />
        </Form.Item>
        <Form.Item
          name="pendapatan_perbulan"
          label="Pendapatan Perbulan"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Pendapatan",
            },
          ]}
        >
          <InputNumber name="pendapatan_perbulan" />
        </Form.Item>
        <Form.Item
          name="bukti_ktp"
          label="Bukti Selfie KTP"
          rules={[
            {
              // required: true,
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
            <Upload.Dragger
              name="selfie-ktp"
              action={`${process.env.REACT_APP_API_URL}upload/selfie_ktp`}
            >
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
              // required: true,
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
            <Upload.Dragger
              name="files"
              action={`${process.env.REACT_APP_API_URL}upload/slip_gaji`}
            >
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">
                Upload file slip gaji dalam bentuk .pdf
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Button
          type="primary"
          loading={validated}
          htmlType="submit"
          style={{ display: "flex", alignItems: "center" }}
        >
          <strong>Submit Pengajuan KPR</strong>
        </Button>
      </Form>
    </>
  );
}
