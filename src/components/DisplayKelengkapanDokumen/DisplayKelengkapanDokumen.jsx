import { Badge, Col, Skeleton, Typography } from "antd";
import React from "react";
import { FormatNumberCurrency, StatusPengajuan } from "../../utils";
import DisplayRow from "../DisplayRow";
import Title from "../Title";

export default function DisplayKelengkapanDokumen({
  data,
  showStatus,
  showTitle,
}) {
  return (
    <>
      {showTitle ? (
        <Title
          title={
            data?.ID ? (
              "Kelengkapan Data KPR"
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
        id="data-kpr"
        style={{ whiteSpace: "nowrap" }}
      >
        <Col>
          <DisplayRow
            data={{ label: "Alamat Rumah", value: data && data?.AlamatRumah }}
          />
          <DisplayRow
            data={{
              label: "Luas Tanah/Rumah",
              value: data && (
                <>
                  {data?.LuasRumah} m<sup>2</sup>
                </>
              ),
            }}
          />
          <DisplayRow
            data={{
              label: "Harga Rumah/Tanah",
              value: data && FormatNumberCurrency(data?.HargaRumah, {}),
            }}
          />
          <DisplayRow
            data={{
              label: "Jangka Pembayaran",
              value: data && `${data?.JangkaPembayaran / 12} Tahun`,
            }}
          />
          <DisplayRow
            data={{
              label: "Dokumen Pendukung",
              value: data && (
                <Typography.Link
                  href={`${
                    new URL(process.env.REACT_APP_API_URL).origin
                  }/download/${data?.DokumenPendukung}`}
                >
                  File Dokumen Pendukung
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
