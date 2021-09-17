import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Descriptions, Button, Typography } from "antd";
import { httpAuth } from "../../configs/axios-instances";

export default function DetailPengajuan() {
  const { params } = useRouteMatch();
  const { Link } = Typography;
  const [dataSource, setDataSource] = React.useState({});
  console.log(params);

  useEffect(() => {
    const dispDetailPengajuan = async () => {
      const { data } = await httpAuth
        .get("/pengajuan", {
          params: { id_customer: params.id },
        })
        .then((res) => res.data)
        .catch(function (error) {
          return []; // Return empty array in case error response.
        });
      setDataSource(data);
    };
    dispDetailPengajuan();
  }, [params.id]);

  return (
    <div>
      <Descriptions title="Data Diri Anda" column={1}>
        <Descriptions.Item label="Nomor Induk KTP">
          {dataSource.nik}
        </Descriptions.Item>
        <Descriptions.Item label="Nama Lengkap">
          {dataSource.nama_lengkap}
        </Descriptions.Item>
        <Descriptions.Item label="Tempat, Tanggal Lahir">
          {/* {data2.tempat_lahir}, {data2.tanggal_lahir} */}
        </Descriptions.Item>
        <Descriptions.Item label="Alamat saat ini">
          {/* {data2.alamat} */}
        </Descriptions.Item>
        <Descriptions.Item label="Pekerjaan">
          {/* {data2.pekerjaan} */}
        </Descriptions.Item>
        <Descriptions.Item label="Pendapatan per bulan">
          {/* {data2.pendapatan_perbulan} */}
        </Descriptions.Item>
        <Descriptions.Item label="Bukti Selfie KTP">
          {" "}
          <Link href="{data2.bukti_ktp}" target="_blank">
            File_KTP.pdf
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Bukti Slip Gaji">
          <Link href="{data2.bukti_gaji}" target="_blank">
            File_Slip_Gaji.pdf
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Status Verifikasi">
          <Button type="primary">Terverifikasi</Button>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
  // <div>Detail Pengajuan {params.id}</div>;
}
