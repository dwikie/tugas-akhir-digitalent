import { Col } from "antd";
import React from "react";
import DisplayRow from "../DisplayRow";

export default function DisplayKelengkapanDokumen({ data, showStatus }) {
  return (
    <Col>
      <DisplayRow
        data={{ label: "Alamat Rumah", value: data && data?.alamat_rumah }}
      />
      <DisplayRow
        data={{
          label: "Luas Tanah/Rumah",
          value: data && `${data?.alamat_rumah}m2`,
        }}
      />
      <DisplayRow
        data={{ label: "Harga Rumah/Tanah", value: data && data?.harga_rumah }}
      />
      <DisplayRow
        data={{
          label: "Jangka Pembayaran",
          value: data && `${data?.jangka_pembayaran_thn} Tahun`,
        }}
      />
      <DisplayRow
        data={{ label: "Dokumen Pendukung", value: data?.dokumen_pendukung }}
      />
      <DisplayRow data={{ label: "Status", value: data && data?.status }} />
    </Col>
  );
}
