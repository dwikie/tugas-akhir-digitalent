import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import { Descriptions,Button,Typography  } from 'antd';
import FormKelengkapanKPR from "./form-kelengkapan-KPR"


export default function DetailPengajuan() {
  const { params } = useRouteMatch();
  const { Link } = Typography;


  return (
    <div>
    
   <Descriptions title="Data Diri Anda" column={1} >
    
    <Descriptions.Item label="Nomor Induk KTP">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Nama Lengkap">Nia Kurniasih</Descriptions.Item>
    <Descriptions.Item label="Tempat, Tanggal Lahir">Bandung, 7 Juli 1980</Descriptions.Item>
    <Descriptions.Item label="Alamat saat ini">Jl. Raya Bojongsoang, No.180, Bandung</Descriptions.Item>
    <Descriptions.Item label="Pekerjaan">Seniman</Descriptions.Item>
    <Descriptions.Item label="Pendapatan per bulan">Rp. 5.000.000</Descriptions.Item>
    <Descriptions.Item label="Bukti Selfie KTP"> <Link href="" target="_blank">
      File_KTP.pdf
    </Link></Descriptions.Item>
    <Descriptions.Item label="Bukti Slip Gaji"><Link href="" target="_blank">
      File_Slip_Gaji.pdf
    </Link></Descriptions.Item>
    <Descriptions.Item label="Status Verifikasi"><Button type="primary">Terverifikasi</Button></Descriptions.Item>
   
  </Descriptions>

  <FormKelengkapanKPR></FormKelengkapanKPR>
  
  </div>);
 
}
