import { Badge, Col, Typography } from "antd";
import React from "react";
import { StatusPengajuan } from "../../utils";
import { DateToLocale } from "../../utils/DateConversion";
import DisplayRow from "../DisplayRow";

export default function DisplayPengajuanKPR({ data, showStatus }) {
  return (
    <Col>
      <DisplayRow data={{ label: "NIK", value: data?.Nik }} />
      <DisplayRow data={{ label: "Nama Lengkap", value: data?.NamaLengkap }} />
      <DisplayRow
        data={{
          label: "Tempat, Tanggal Lahir",
          value:
            data &&
            data?.TempatLahir &&
            data?.TanggalLahir &&
            `${data?.TempatLahir}, ${DateToLocale(data?.TanggalLahir, {
              locale: "id-ID",
              timeZone: "Asia/Jakarta",
            })}`,
        }}
      />
      <DisplayRow data={{ label: "Alamat", value: data?.Alamat }} />
      <DisplayRow data={{ label: "Pekerjaan", value: data?.Pekerjaan }} />
      <DisplayRow
        data={{
          label: "Pendapatan Perbulan",
          value: data?.PendapatanPerbulan,
        }}
      />
      <DisplayRow
        data={{
          label: "Bukti Selfie KTP",
          value: data?.BuktiKtp && (
            <Typography.Link href={data?.BuktiKtp}>
              File Slip KTP
            </Typography.Link>
          ),
        }}
      />
      <DisplayRow
        data={{
          label: "Bukti Slip Gaji",
          value: data?.SlipGaji && (
            <Typography.Link href={data?.SlipGaji}>
              File Slip Gaji
            </Typography.Link>
          ),
        }}
      />
      {showStatus && (
        <DisplayRow
          data={{
            label: "Status Verifikasi",
            value: data?.Status && (
              <Badge
                status={StatusPengajuan(data?.Status).status}
                text={StatusPengajuan(data?.Status).detail}
              />
            ),
          }}
        />
      )}
    </Col>
  );
}
