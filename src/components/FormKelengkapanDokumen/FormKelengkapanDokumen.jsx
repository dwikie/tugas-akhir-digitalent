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
import { PostAdditionalDocument } from "../../services/kelengkapan-dokumen";
import { getCustomerSubmission } from "../../services/pengajuan-service";

export default function FormKelengkapanDokumen() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [submissionID, setSubmissionID] = useState();
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

  useEffect(() => {
    const getSubmissionID = async () => {
      const { result } = await getCustomerSubmission().start();
      setSubmissionID(result.ID);
    };
    getSubmissionID();
  });

  const onFinish = async (value) => {
    setIsLoading(true);
    return await PostAdditionalDocument({ ...value, submissionID })
      .start()
      .then(
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
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit Pengajuan
          </Button>
        </Row>
      </Form>
    </>
  );
}
