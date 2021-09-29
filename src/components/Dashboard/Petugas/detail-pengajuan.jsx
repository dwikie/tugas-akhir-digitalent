import React from "react";

import { Descriptions, Button, Typography } from "antd";

export default function DetailPengajuan() {
  // const { params } = useRouteMatch();
  const { Link } = Typography;

  return (
    <div>
      <Descriptions title="Data Diri Anda" column={1}>
        <Descriptions.Item label="Nomor Induk KTP"></Descriptions.Item>
        <Descriptions.Item label="Nama Lengkap"></Descriptions.Item>
        <Descriptions.Item label="Tempat, Tanggal Lahir"></Descriptions.Item>
        <Descriptions.Item label="Alamat saat ini"></Descriptions.Item>
        <Descriptions.Item label="Pekerjaan"></Descriptions.Item>
        <Descriptions.Item label="Pendapatan per bulan"></Descriptions.Item>
        <Descriptions.Item label="Bukti Selfie KTP">
          <Link href="" target="_blank">
            File_KTP.pdf
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Bukti Slip Gaji">
          <Link href="" target="_blank">
            File_Slip_Gaji.pdf
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Status Verifikasi">
          <Button type="primary">{}</Button>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
