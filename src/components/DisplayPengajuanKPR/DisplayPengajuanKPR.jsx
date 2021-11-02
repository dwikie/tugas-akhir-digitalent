import { Badge, Col, Skeleton, Typography } from "antd";
import React from "react";
import Title from "../Title";
import { FormatNumberCurrency, StatusPengajuan } from "../../utils";
import { DateToLocale } from "../../utils/DateConversion";
import DisplayRow from "../DisplayRow";

export default function DisplayPengajuanKPR({ data, showStatus, showTitle }) {
  return (
    <>
      {showTitle ? (
        <Title
          title={
            data?.ID ? (
              "Data Diri"
            ) : (
              <Skeleton
                paragraph={null}
                title={{ style: { margin: "0 auto" }, width: "180px" }}
              />
            )
          }
        />
      ) : null}
      <section
        className="display-container"
        id="data-diri"
        style={{ whiteSpace: "nowrap" }}
      >
        <Col>
          <DisplayRow data={{ label: "NIK", value: data?.Nik }} />
          <DisplayRow
            data={{ label: "Nama Lengkap", value: data?.NamaLengkap }}
          />
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
              value:
                data &&
                data?.PendapatanPerbulan &&
                FormatNumberCurrency(data?.PendapatanPerbulan, {}),
            }}
          />
          <DisplayRow
            data={{
              label: "Bukti Selfie KTP",
              value: data?.BuktiKtp && (
                <Typography.Link
                  href={`${
                    new URL(process.env.REACT_APP_API_URL).origin
                  }/download/${data?.BuktiKtp}`}
                >
                  File Slip KTP
                </Typography.Link>
              ),
            }}
          />
          <DisplayRow
            data={{
              label: "Bukti Slip Gaji",
              value: data?.SlipGaji && (
                <Typography.Link
                  href={`${
                    new URL(process.env.REACT_APP_API_URL).origin
                  }/download/${data?.SlipGaji}`}
                >
                  File Slip Gaji
                </Typography.Link>
              ),
            }}
          />
          {showStatus ? (
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
          ) : null}
        </Col>
      </section>
    </>
  );
}
