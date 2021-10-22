import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
  Alert,
} from "antd";
import DisplayRow from "../DisplayRow";
import { UploadOutlined } from "@ant-design/icons";
import { EditAdditionalDocument } from "../../services/AdditionalDocumentServices";

export default function FormRevisiKelengkapanDokumen({ data }) {
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
    console.log(value);
    setIsLoading(true);
    try {
      await EditAdditionalDocument(value).start();
      setIsLoading(false);
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
            message: "Data yang anda masukkan sudah ada!",
            type: "error",
          });
          break;
        default:
          setResponse({
            message: `Terjadi kesalahan: ${err.message}`,
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
            label: "Alamat Rumah",
            value: (
              <Form.Item
                name="AlamatRumah"
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Alamat Rumah",
                  },
                ]}
              >
                <Input name="AlamatRumah" placeholder="Alamat Rumah" />
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
                name="LuasRumah"
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Luas Tanah",
                  },
                ]}
              >
                <InputNumber
                  name="LuasRumah"
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
                name="HargaRumah"
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Harga Rumah",
                  },
                ]}
              >
                <InputNumber
                  name="HargaRumah"
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
                name="JangkaPembayaran"
                rules={[
                  {
                    required: true,
                    message: "Mohon isi Jangka Pembayaran",
                  },
                ]}
              >
                <Select
                  name="JangkaPembayaran"
                  placeholder="- Pilih Jangka Pembayaran -"
                >
                  <Select.Option value="12">1 Tahun</Select.Option>
                  <Select.Option value="24">2 Tahun</Select.Option>
                  <Select.Option value="36">3 Tahun</Select.Option>
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
                name="DokumenPendukung"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload.Dragger
                  name="DokumenPendukung"
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
          <Button
            type="primary"
            style={{ display: "flex", alignItems: "center" }}
            htmlType="submit"
            loading={isLoading}
          >
            Submit Pengajuan
          </Button>
        </Row>
      </Form>
    </>
  );
}
