import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Descriptions, Button, Typography } from "antd";
import FormKelengkapanKPR from "./form-kelengkapan-KPR";
import { httpAuth } from "../../configs/axios-instances";
import apiDetail from "./detail-pengajuan-petugas";

export default function DetailPengajuan() {
  // const { params } = useRouteMatch();
  const { Link } = Typography;
  

//  console.log(dataSource);



  return (
    
    <div>
      
      <Descriptions title="Data Diri Anda" column={1}>
        <Descriptions.Item label="Nomor Induk KTP">
          
        </Descriptions.Item>
        <Descriptions.Item label="Nama Lengkap">
          
        </Descriptions.Item>
        <Descriptions.Item label="Tempat, Tanggal Lahir">
          
        </Descriptions.Item>
        <Descriptions.Item label="Alamat saat ini">
          
        </Descriptions.Item>
        <Descriptions.Item label="Pekerjaan">
         
        </Descriptions.Item>
        <Descriptions.Item label="Pendapatan per bulan">
          
        </Descriptions.Item>
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
  // <div>Detail Pengajuan {params.id}</div>;
}
