import React from "react";
import { Button, Form, Input, InputNumber, Row, Select, Upload } from "antd";
import DisplayRow from "../DisplayRow";
import { UploadOutlined } from "@ant-design/icons";

export default function FormKelengkapanDokumen() {
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

  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form onFinish={onFinish}>
      <DisplayRow
        data={{
          label: "Alamat Rumah",
          value: (
            <Form.Item
              name="alamat_rumah"
              rules={[
                {
                  required: true,
                  message: "Mohon isi Alamat Rumah",
                },
              ]}
            >
              <Input name="alamat_rumah" placeholder="Alamat Rumah" />
            </Form.Item>
          ),
        }}
      />
      <DisplayRow
        data={{
          label: (
            <>
              Luas Tanah{" "}
              <sup>
                (m<sup>2</sup>)
              </sup>
            </>
          ),
          value: (
            <Form.Item
              name="luas_tanah"
              rules={[
                {
                  required: true,
                  message: "Mohon isi Luas Tanah",
                },
              ]}
            >
              <InputNumber
                name="luas_tanah"
                placeholder="Luas Tanah"
                style={{ width: "100%" }}
              />
            </Form.Item>
          ),
        }}
      />
      <DisplayRow
        data={{
          label: "Harga Rumah",
          value: (
            <Form.Item
              name="harga_rumah"
              rules={[
                {
                  required: true,
                  message: "Mohon isi Harga Rumah",
                },
              ]}
            >
              <InputNumber
                name="harga_rumah"
                placeholder="Harga Rumah"
                style={{ width: "100%" }}
              />
            </Form.Item>
          ),
        }}
      />
      <DisplayRow
        data={{
          label: "Jangka Pembayaran",
          value: (
            <Form.Item
              name="jangka_pembayaran_thn"
              rules={[
                {
                  required: true,
                  message: "Mohon isi Jangka Pembayaran",
                },
              ]}
            >
              <Select
                name="jangka_pembayaran_thn"
                placeholder="- Pilih Jangka Pembayaran -"
              >
                <Select.Option value="1">1 Tahun</Select.Option>
                <Select.Option value="2">2 Tahun</Select.Option>
                <Select.Option value="3">3 Tahun</Select.Option>
              </Select>
            </Form.Item>
          ),
        }}
      />
      <DisplayRow
        data={{
          label: "Dokumen Pendukung",
          value: (
            <Form.Item
              name="dokumen_pendukung"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload.Dragger
                name="dokumen_pendukung"
                multiple={false}
                customRequest={dummyRequest}
                accept=".PDF"
              >
                <p className="ant-upload-drag-icon">
                  <UploadOutlined />
                </p>
                <p className="ant-upload-text">
                  Upload Dokumen Pendukung dalam Bentuk PDF
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
