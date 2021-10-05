import { Badge, Col, Typography } from "antd";
import React from "react";
import { StatusPengajuan } from "../../utils";
import { DateToLocale } from "../../utils/DateConversion";
import DisplayRow from "../DisplayRow";

export default function DisplayPengajuanKPR({ data, showStatus }) {
  return (
    <Col>
      <DisplayRow data={{ label: "NIK", value: data?.nik }} />
      <DisplayRow data={{ label: "Nama Lengkap", value: data?.nama_lengkap }} />
      <DisplayRow
        data={{
          label: "Tempat, Tanggal Lahir",
          value:
            data &&
            data?.tempat_lahir &&
            data?.tanggal_lahir &&
            `${data?.tempat_lahir}, ${DateToLocale(data?.tanggal_lahir, {
              locale: "id-ID",
              timeZone: "Asia/Jakarta",
            })}`,
        }}
      />
      <DisplayRow data={{ label: "Alamat", value: data?.alamat }} />
      <DisplayRow data={{ label: "Pekerjaan", value: data?.pekerjaan }} />
      <DisplayRow
        data={{
          label: "Pendapatan Perbulan",
          value: data?.pendapatan_perbulan,
        }}
      />
      <DisplayRow
        data={{
          label: "Bukti Selfie KTP",
          value: data?.bukti_ktp && (
            <Typography.Link href={data?.bukti_ktp}>
              File Slip KTP
            </Typography.Link>
          ),
        }}
      />
      <DisplayRow
        data={{
          label: "Bukti Slip Gaji",
          value: data?.bukti_gaji && (
            <Typography.Link href={data?.bukti_gaji}>
              File Slip Gaji
            </Typography.Link>
          ),
        }}
      />
      {showStatus && (
        <DisplayRow
          data={{
            label: "Status Verifikasi",
            value: data?.status && (
              <Badge
                status={StatusPengajuan(data?.status).status}
                text={StatusPengajuan(data?.status).detail}
              />
            ),
          }}
        />
      )}
    </Col>
  );
}
