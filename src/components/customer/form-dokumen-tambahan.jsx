import React, { useState } from "react";
import { Form, Input, Button, Select, InputNumber, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { CaretRightOutlined } from "@ant-design/icons";

export default function FormDokumenTambahan() {
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
        id="form-dokumen"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
        onFinish={handleOnFinish}
      >
        <Form.Item
          name="alamat-rumah"
          label="Alamat Rumah"
          rules={[
            {
              required: true,
              message: "Mohon masukkan Alamat rumah",
            },
          ]}
        >
          <Input.TextArea/>
        </Form.Item>
       
        <Form.Item
          name="luas-tanah-rumah"
          label="Luas Tanah"
          rules={[
            {
              required: true,
              message: "Mohon masukkan luas tanah/rumah",
            },
          ]}
        >
          <InputNumber 
           placeholder="m²"
          />
        </Form.Item>

        <Form.Item
          name="harga-rumah"
          label="Harga Rumah (Nett)"
          placeholder="Rp."
          rules={[
            {
              required: true,
              message: "Mohon masukkan harga rumah",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="jangka-pembayaran"
          label="Jangka Pembayaran">
          <Select  placeholder="- jumlah tahun -">
            <Select.Option selected disabled value="" hidden> - Pilih Jangka Pembayaran - </Select.Option>
            <Select.Option value="1">1 Tahun</Select.Option>
            <Select.Option value="2">2 Tahun</Select.Option>
            <Select.Option value="3">3 Tahun</Select.Option>
          </Select>
        </Form.Item>


        <Form.Item
          name="bukti-dokumen-pendukung"
          label="Dokumen Pendukung"
          rules={[
            {
              required: true,
              message: "Mohon masukkan dokumen pendukung",
            },
          ]}
        >
          <Form.Item
            name="dokumen-pendukung"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">
                Upload dokumen pendukung dalam bentuk .pdf
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
        <CaretRightOutlined />
        <strong> Submit Dokumen Tambahan dan Ajukan KPR</strong>
      </Button>
    </>
  );
}
