import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Descriptions, Button, Divider, Row, Select,Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";


export default function FormKelengkapanKPR() {
  const { params } = useRouteMatch();
  

  const { Text, Link } = Typography;
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <Divider />
      <Descriptions title="Kelengkapan Data KPR" column={1}>
        <Descriptions.Item label="Alamat Rumah">
          Jl. Permai 5 No. 11 A, Komplek Cipadung Permai
        </Descriptions.Item>
        <Descriptions.Item label="Luas Tanah/Rumah">500 m2</Descriptions.Item>
        <Descriptions.Item label="Harga Rumah">
          Rp. 500.000.000
        </Descriptions.Item>
        <Descriptions.Item label="Jangka Pembayaran">5 Tahun</Descriptions.Item>
        <Descriptions.Item label="Dokumen Pendukung">
          <Select
            defaultValue="Ubah Status"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="disetujui">Disetujui</Option>
            <Option value="ditolak">Ditolak</Option>
          </Select>
        </Descriptions.Item>
      </Descriptions>

      <Row justify="space-between">
      <Button icon={<LeftOutlined />}  style={{
                display: "flex",
                alignItems: "center",
              }}>Kembali</Button>
        <Button type="primary">Simpan</Button>
      </Row>
    
    </div>
  );
  // <div>Detail Pengajuan {params.id}</div>;
}
