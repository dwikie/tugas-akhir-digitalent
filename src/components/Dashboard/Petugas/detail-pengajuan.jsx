import React, { useEffect, useState } from "react";
import { httpAuth } from "../../../configs/axios-instances";
import { Descriptions, Button, Typography } from "antd";
// import { useRouteMatch } from "react-router";

export default function DetailPengajuan() {
  // const { params } = useRouteMatch();
  const [detail, setDetail] = useState({});
  const { Link } = Typography;

  useEffect(() => {
    async function populateDetailPengajuan() {
      const { data } = await httpAuth.get("pengajuan", {
        params: {
          id_customer: 1,
        },
      });

      let result = data.data;
      setDetail(result);
    }

    populateDetailPengajuan();
  }, []);

  return (
    <div>
      <Descriptions title="Data Diri Anda" column={1}>
        <Descriptions.Item label="Nomor Induk KTP">
          {detail?.nik}
        </Descriptions.Item>
        <Descriptions.Item label="Nama Lengkap">
          {detail?.nama_lengkap}
        </Descriptions.Item>
        <Descriptions.Item label="Tempat, Tanggal Lahir">
          {detail?.tempat_lahir +
            ", " +
            new Date(detail?.tanggal_lahir).toLocaleDateString()}
        </Descriptions.Item>
        <Descriptions.Item label="Alamat saat ini">
          {detail?.alamat}
        </Descriptions.Item>
        <Descriptions.Item label="Pekerjaan">
          {detail?.pekerjaan}
        </Descriptions.Item>
        <Descriptions.Item label="Pendapatan per bulan">
          {new Intl.NumberFormat("id-ID", {
            maximumSignificantDigits: 2,
          }).format(detail?.pendapatan_perbulan * 100000)}
        </Descriptions.Item>
        <Descriptions.Item label="Bukti Selfie KTP">
          <Link href={detail?.bukti_ktp} target="_blank">
            File_KTP.pdf
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Bukti Slip Gaji">
          <Link href={detail?.bukti_gaji} target="_blank">
            File_Slip_Gaji.pdf
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Status Verifikasi">
          <Button type="primary">{detail?.status}</Button>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
